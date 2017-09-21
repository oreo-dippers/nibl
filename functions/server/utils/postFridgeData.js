const db = require('../../db/db.js');

module.exports.postFridgeData = data => {

  const promise = new Promise((resolve, reject) => {
    // Get firebaseId and foursquareId from data.body
    console.log('data.body received is ', data.body);
    console.log('data.body.firebaseId received is ', data.body.firebaseId);
    console.log('data.body.foursquareEntryId received is ', data.body.foursquareEntryId);

    Promise.all([
      // Get the userId based on the firebase UUID
      db.User.findOne({
        where: {
          firebaseUuid: data.body.firebaseId
        }
      }),
      // Get the dishId based on the foursquareEntryId
      db.Dish.findOne({
        where: {
          foursquareEntryId: data.body.foursquareEntryId
        }
      })
    ])
    .then(values => {
      // console.log(values);
      if (values.length !== 2) {
        reject('Either no user or dish or both were found or created due to unexpected data received');
      }

      console.log('User id is ', values[0].dataValues.id);
      const currentUserId = values[0].dataValues.id;
      console.log('Dish id is ', values[1].dataValues.id);
      const currentDishId = values[1].dataValues.id;

      db.UserDish
        .findOrCreate({
          where: {
            userId: currentUserId,
            dishId: currentDishId
          },
          defaults: {
            userId: currentUserId,
            dishId: currentDishId
          }
        })
        .then(userDishEntry => {
          console.log('userDishEntry is ', userDishEntry);

          const {
            userId, 
            dishId
          } = userDishEntry[0].dataValues;

          resolve({userId, dishId});
        }); // End of db.UserDish.findOrCreate()
    }); // End of Promise.all()
  });

  return promise;
};

// Needs error handling if foursquareEntryId or firebaseId not good
