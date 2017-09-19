const db = require('../../db/db.js');

module.exports.getFridgeData = (data) => {

  const promise = new Promise((resolve, reject) => {
    // Get firebaseId from data.query
    console.log('firebaseId is ', data.query.firebaseId);

    // Get user
    db.User
      .findOne({
        where: {
          firebaseUuid: data.query.firebaseId
        }
      })
      .then(user => {
        console.log('user is ', user);
        console.log('user[0].dataValues is ', user[0].dataValues);
        console.log('user[0].dataValues id is ', user[0].dataValues.id);

        // Find all user's saved dishes
        db.UserDish
          .findAll({
            where: {
              userId: user[0].dataValues.id
            }
          })
          .then(userSavedDishes => {
            // userSavedDishes is an array of userIds, dishIds
            console.log('UserSavedDishes are.. ', userSavedDishes);

            if (!userSavedDishes) {
              reject('This user had no saved dishes');
            }

            // Function to find Dishes and get their info
            const findDishInfo = (userSavedDish) => {
              console.log('userSavedDish is ', userSavedDish);

              return new Promise(resolve => {
              
                db.Dish
                  .findOne({
                    where: {
                      id: userSavedDish[0].dataValues.dishId
                    }
                  })
                  .then(currentDish => {
                    console.log('dishInfo is ', dishInfo);

                    // Make organized data to send to front end
                    let {foursquareEntryId, name, imageUrl, description, price, avgDishRating} = currentDish[0].dataValues;

                    resolve({foursquareEntryId, name, imageUrl, description, price, avgDishRating});
                  }); // End of db.Dish.findOne()
              }); // End of findDishInfo promise
            };

            // Actions is to iterate through all dishes and findDishInfo
            const actions = userSavedDishes.map(findDishInfo);

            // Promise all the actions
            const results = Promise.all(actions);

            results
              .then(dishArray => {
                if (dishArray) {
                  console.log('Users saved dishes aka fridge resolves');
                  resolve(dishArray);
                }
              });
          }); // End of db.UserDish.findAll()
      }); // End of db.User.findOne()
    
  }); // End of promise

  return promise;
};
