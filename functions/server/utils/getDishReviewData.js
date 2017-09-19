const db = require('../../db/db.js');

module.exports.getDishReviewData = data => {

  const promise = new Promise((resolve, reject) => {
    console.log('foursquareEntryId sent is : ', data.query.foursquareEntryId);

    // Get the dishId based on the foursquareEntryId
    db.Dish.findOne({
      where: {
        foursquareEntryId: data.query.foursquareEntryId
      }
    })
    .then(dish => {
      // console.log(dish);

      // If no dish is found
      if (!dish) {
        console.error('This foursquareEntryId (dishId) is invalid');
        reject('This foursquareEntryId (dishId) is invalid');
      }

      console.log('Dish id is ', dish.dataValues.id);

      db.DishReview
        .findAll({
          where: {
            dishId: dish.dataValues.id
          }
        })
        .then(dishReviews => {
          var simpleDishReviews = [];
          // console.log('dishReviews array is ', dishReviews);

          if (!dishReviews.length) {
            console.log('There are no reviews for this dish');
            reject('No reviews exist for this dish');
          } else {
            // Iterate through dishReview array
            // Push only dataValues of each element to simpleDishReviews
            dishReviews.forEach(entry => {
              simpleDishReviews.push(entry.dataValues);
            });

            console.log('Simple Dish Reviews are ', simpleDishReviews);

            // Function find user in database
            const findUser = (review) => {
              console.log('Review you are finding user for is: ', review);
              return new Promise(resolve => {
                db.User.findOne({
                  where: {
                    id: review.userId
                  }
                })
                .then(user => {
                  // console.log('user is ', user);

                  resolve(user);
                });
              });
            };

            const actions = simpleDishReviews.map(findUser);

            // Promise all the actions
            const results = Promise.all(actions);

            // Make organized data to send to front end
            results
              .then(resultArray => {
                // For loop over simpleDishReviews
                for (let i = 0; i < simpleDishReviews.length; i++) {
                  // Add userData from resultArray as property in simpleDishReviews array
                  simpleDishReviews[i].userData = JSON.parse(resultArray[i].userData);
                }

                return simpleDishReviews;
              })
              .then(dishReviewData => {
                if (dishReviewData) {
                  console.log('Dish Reviews were gotten: ', dishReviewData);
                  resolve(dishReviewData);
                } else {
                  reject('No data');
                }
              });
          } // End of else
        }); // End of DishReview.find()
    });
  }); // End of promise

  return promise;
};
