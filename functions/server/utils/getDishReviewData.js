const db = require('../../db/db.js');

module.exports.getDishReviewData = data => {
  var currentDishId;

  const promise = new Promise((resolve, reject) => {
    // View data to see what it is being sent
    console.log('Data received for getDishReviewData is: ', data);
    // console.log('data.: ', data.query);
    console.log('foursquareEntryId sent is : ', data.query.foursquareEntryId);

    // Get the dishId based on the foursquareEntryId
    db.Dish.findOne({
      where: {
        foursquareEntryId: data.query.foursquareEntryId // may be foursquareEntryId instead
        // foursquareEntryId: '6723406' // has review
        // foursquareEntryId: '18685324'  // has no review
        // foursquareEntryId: '0000000'  // does not exist
      }
    })
    .then(dish => {
      console.log(dish);

      // If no dish is found
      if (!dish) {
        console.error('This foursquareEntryId (dishId) is invalid');
        reject('This foursquareEntryId (dishId) is invalid');
      }

      console.log('Dish id is ', dish.dataValues.id);
      currentDishId = dish.dataValues.id;

      db.DishReview
        .findAll({
          where: {
            dishId: currentDishId
          }
        })
        .then(dishReviews => {
          var simpleDishReviews = [];
          console.log('dishReviews array is ', dishReviews);
          // console.log('dishReviews[0] object is ', dishReviews[0].dataValues);
          // Make organized data to send to front end

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
                  console.log('user is ', user);

                  resolve(user);
                });
              });
            };

            const actions = simpleDishReviews.map(findUser);

            // Promise all the actions
            const results = Promise.all(actions);

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
                  console.log('Dish Reviews were gotten');
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
