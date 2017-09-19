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

        // Find all user's saved dishes
        db.UserDish
          .findAll({

          }); // End of db.UserDish.findAll()
      }); // End of db.User.findOne()
    
  }); // End of promise

  return promise;
};



//   db.UserDish.findAll()
//     Where userId
//     .then(userSavedDishes)
//     This is similar to restaurantData.js
//     userSavedDishes is an array of userIds, dishIds
//     const actions = userSavedDishes.map(findDishInfo);
//     Const findDishInfo = (userSavedDish) =>{}
//       Return promise
//       db.Dish.findOne()
//       Where dishId is savedDishes’ Id
//       .then(dishInfo)
//       Get clean data from dishInfo
//       This should include all dish info
//     Const results = Promise.all(actions)
//     Results.then()
//       Resolve
//       Reject 
//     Include scenario if user saved no foods
