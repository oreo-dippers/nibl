const db = require('../../db/db.js');

module.exports.getDishReviewData = data => {
  var currentDishId;

  const promise = new Promise((resolve, reject) => {
    // View data to see what it is being sent
    // console.log('Data received for getDishReviewData is: ', data.body);

    // Get the dishId based on the foursquareEntryId
    db.Dish.findOne({
      where: {
        foursquareEntryId: data.body.dishId
        // foursquareEntryId: '21566013'
      }
    })
    .then(dish => {
      console.log(dish);
      console.log('Dish id is ', dish.dataValues.id);
      currentDishId = dish.dataValues.id;

      db.DishReview
        .findAll({
          where: {
            dishId: currentDishId
          }
        })
        .then(dishReviews => {
          console.log('dishReviews array is ', dishReviews);
          // console.log('dishReviews[0] object is ', dishReviews[0].dataValues);
          // Make organized data to send to front end

          return dishReviews;
        })
        .then(dishReviews => {
          if (dishReviews) {
            console.log('Dish Reviews were gotten');
            resolve(dishReviews);
          } else {
            reject('No data');
          }
      }); // End of DishReview.find()
    });
  }); // End of promise

  return promise;
};