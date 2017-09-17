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
      }
    })
    .then(values => {
      console.log(values);
      console.log('Dish id is ', values[1].dataValues.id);
      currentDishId = values[1].dataValues.id;

      db.DishReview
        .findAll({
          where: {
            dishId: currentDishId
          }
        })
        .then(dishReviews => {
          // console.log('dishReview object is ', dishReview);
          // console.log('dishReview object is ', dishReview[0].dataValues);
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
