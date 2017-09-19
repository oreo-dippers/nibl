// Get firebaseId and foursquareId from data.body
//   Using promise.all (can ref postDishReviewData)
//     Turn firebaseId into userId
//     Turn foursquareId into dishId
//     .then(values) 
//       db.UserDish.findOrCreate
//       Where userId and dishId
//       Defaults userId and dishId
//         .then(userDishEntry)
//         Send organized data back to front end
//         Resolve
//         Reject
