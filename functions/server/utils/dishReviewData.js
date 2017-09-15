const db = require('../../db/db.js');

module.exports.postDishReviewData = (data) => {
  const promise = new Promise((resolve, reject) => {

    var currentUserId;
    var currentDishId;

    // Get the userId based on the firebase UUID
    db.User.findOne({
      where: { 
        firebaseUuid: data.userId 
      }
    })
    .then((user) => {
      currentUserId = user.id;
    });
    
    // Get the dishId based on the foursquareEntryId
    db.Dish.findOne({
      where: {
        foursquareEntryId: data.dishId
      }
    })
    .then((dish) => {
      currentDishId = dish.id;
    });

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
      if(newReview) {
        console.log('Dish Review was added to database!');
        resolve(newReview);
      } else {
        reject('No data');
      }
    });
  });

  return promise;
};