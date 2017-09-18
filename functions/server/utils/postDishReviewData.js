const db = require('../../db/db.js');

module.exports.postDishReviewData = data => {
  var currentUserId;
  var currentDishId;

  const promise = new Promise((resolve, reject) => {
    // View data to see what it is being sent
    // console.log('Data received for postDishReviewData is: ', data);
    console.log('data.body received for postDishReviewData is: ', data.body);

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
    ]).then(values => {
      // console.log(values);
      console.log('User id is ', values[0].dataValues.id);
      currentUserId = values[0].dataValues.id;
      console.log('Dish id is ', values[1].dataValues.id);
      currentDishId = values[1].dataValues.id;

      db.DishReview
        .findOrCreate({
          where: {
            userId: currentUserId,
            dishId: currentDishId
          },
          defaults: {
            // If it is not in the DishReview table, set these defaults:
            userId: currentUserId,
            dishId: currentDishId,
            review: data.body.review,
            starRating: data.body.starRating,
            imageUrl: data.body.imageUrl,
            upvoteTotal: 0
          }
        })
        .then(dishReview => {
          // console.log('dishReview object is ', dishReview);
          // console.log('dishReview object is ', dishReview[0].dataValues);
          // Make organized data to send to front end
          const {
            userId,
            dishId,
            review,
            starRating,
            imageUrl,
            upvoteTotal
          } = dishReview[0].dataValues;

          const newReview = {
            userId,
            dishId,
            review,
            starRating,
            imageUrl,
            upvoteTotal
          };

          // Update a dish's avgDishRating
          // Count number of dishReviews where dishId is currentDishId (this will be divisor)
          db.DishReview
            .count({
              where: {
                dishId: currentDishId
              }
            })
            .then(numOfReviews => {
              console.log('Number of reviews is ', numOfReviews);
              // Sum all of dishReviews starRatings where dishId is currentDishId (this will be total)
              db.DishReview
                .sum('starRating', {
                  where: {
                    dishId: currentDishId
                  }
                })
                .then(total => {
                  console.log('total is ', total);
                  // Round result of average to nearest .5
                  // rating = (Math.round(rating * 2) / 2).toFixed(1)
                  const newAvg = (Math.round(total / numOfReviews * 2) /
                    2).toFixed(1);
                  console.log('new average dish rating is ', newAvg);
                  // Get dish entry in Dish table
                  // Update dish's avgDishRating and image
                  
                  db.Dish.update(
                    {
                      avgDishRating: newAvg,
                      imageUrl: dishReview[0].dataValues.imageUrl
                    },
                    {
                      where: {
                        id: currentDishId
                      }
                    }
                  );
                });
            });

          console.log('newReview is ', newReview);

          return newReview;
        })
        .then(newReview => {
          if (newReview) {
            console.log('Dish Review was added to database!');
            resolve(newReview);
          } else {
            reject('No data');
          }
        }); // End of DishReview.findOrCreate()
    }); // End of Promise.all()
  }); // End of promise

  return promise;
};
