const db = require('../../db/db.js');

module.exports.postDishReviewData = (data) => {
  const currentUserId;
  const currentDishId;

  const promise = new Promise((resolve, reject) => {

    Promise.all([
      // Get the userId based on the firebase UUID
      db.User.findOne({
        where: { 
          firebaseUuid: data.userId 
        }
      }),
      // Get the dishId based on the foursquareEntryId
      db.Dish.findOne({
        where: {
          foursquareEntryId: data.dishId
        }
      })
    ])
    .then(values => {
      console.log(values);
      console.log('User id is ', values[0].id);
      currentUserId = values[0].id;
      console.log('Dish id is ', values[1].id);
      currentDishId = values[1].id;

      db.DishReview.findOrCreate({
        where: {
          userId: currentUserId,
          dishId: currentDishId
        },
        defaults: {
          // If it is not in the DishReview table, set these defaults:
          userId: currentUserId,
          dishId: currentDishId,
          review: data.review,
          starRating: data.starRating,
          imageUrl: data.imageUrl,
          upvoteTotal: 0
        }
      })
      .then((dishReview) => {
        // Make organized data to send to front end
        const {userId, dishId, review, starRating, imageUrl, upvoteTotal} = dishReview[0].dataValues;
  
        const newReview = {userId, dishId, review, starRating, imageUrl, upvoteTotal};

        // Do not forget to update a dish's avgRating!!!

        return newReview;
      })
      .then((newReview) => {
        if(newReview) {
          console.log('Dish Review was added to database!');
          resolve(newReview);
        } else {
          reject('No data');
        }
      });
    }); // End of Promise.all()
  });  // End of promise

  return promise;
};

// Get the userId based on the firebase UUID
// db.User.findOne({
//   where: { 
//     firebaseUuid: data.userId 
//   }
// })
// .then((user) => {
//   console.log('User id is ', user.id);
//   currentUserId = user.id;
// });

// Get the dishId based on the foursquareEntryId
// db.Dish.findOne({
//   where: {
//     foursquareEntryId: data.dishId
//   }
// })
// .then((dish) => {
//   console.log('Dish id is ', dish.id);
//   currentDishId = dish.id;
// });