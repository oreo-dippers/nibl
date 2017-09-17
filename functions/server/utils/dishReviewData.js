const db = require('../../db/db.js');

module.exports.postDishReviewData = (data) => {
  var currentUserId;
  var currentDishId;

  const promise = new Promise((resolve, reject) => {
    // View data to see what it is being sent
    // console.log('Data received for postDishReviewData is: ', data.body);

    Promise.all([
      // Get the userId based on the firebase UUID
      db.User.findOne({
        where: { 
          firebaseUuid: data.body.userId 
        }
      }),
      // Get the dishId based on the foursquareEntryId
      db.Dish.findOne({
        where: {
          foursquareEntryId: data.body.dishId
        }
      })
    ])
    .then(values => {
      // console.log(values);
      console.log('User id is ', values[0].dataValues.id);
      currentUserId = values[0].dataValues.id;
      console.log('Dish id is ', values[1].dataValues.id);
      currentDishId = values[1].dataValues.id;

      db.DishReview.findOrCreate({
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
      .then((dishReview) => {
        console.log('dishReview object is ', dishReview[0].dataValues);
        // Make organized data to send to front end
        const {userId, dishId, review, starRating, imageUrl, upvoteTotal} = dishReview[0].dataValues;
  
        const newReview = {userId, dishId, review, starRating, imageUrl, upvoteTotal};

        // Do not forget to update a dish's avgRating!!!
        // Count number of dishReviews where id is currentDishId (this will be number to divide by)
        db.DishReview.count({
          where: {
            id: currentDishId
          }
        })
        .then(numOfReviews => {
          // Sum all of dishReviews starRating where id is dishToUpdate (this will be total)
          db.DishReview.sum('starRating',
          {
            where: {
              id: currentDishId          
            }
          })
          .then(total => {
            // Round result of average to nearest .5
            // rating = (Math.round(rating * 2) / 2).toFixed(1) 
            const newAvg = (Math.round(total / numOfReviews * 2) / 2).toFixed(1);
            console.log('new average dish rating is ', newAvg);
            // Get dish entry in Dish table
            // Update dish's avgRating
          });
        });
        
        console.log('newReview is ', newReview);

        return newReview;
      })
      .then((newReview) => {
        if(newReview) {
          console.log('Dish Review was added to database!');
          resolve(newReview);
        } else {
          reject('No data');
        }
      }); // End of DishReview.findOrCreate()
    }); // End of Promise.all()
  });  // End of promise

  return promise;
};