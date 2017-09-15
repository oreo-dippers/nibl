const db = require('../../db/db.js');

module.exports.postDishReviewData = function(data) {
  let promise = new Promise(function(resolve, reject) {

    var currentUserId;
    var currentDishId;
    
    // Get the userId based on the firebase UUID
    db.User.findOne({
      where: { 
        firebaseUuid: data.userId 
      }
    })
    .then(function(user){
      currentUserId = user.id;
    });
    
    // Get the dishId based on the foursquareEntryId
    db.Dish.findOne({
      where: {
        foursquareEntryId: data.dishId
      }
    })
    .then(function(dish) {
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
    .then(function(dishReview) {
      // Make organized data to send to front end
      let {userId, dishId, review, starRating, imageUrl, upvoteTotal} = dishReview[0].dataValues;

      let newReview = {userId, dishId, review, starRating, imageUrl, upvoteTotal};
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