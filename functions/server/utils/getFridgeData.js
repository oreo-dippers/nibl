// Get firebaseId from data.query
//   db.User.findOne()
//   Where userId is firebaseId
//   .then(user)
//   db.UserDish.findAll()
//     Where userId
//     .then(userSavedDishes)
//     This is similar to restaurantData.js
//     userSavedDishes is an array of userIds, dishIds
//     const actions = userSavedDishes.map(findDishInfo);
//     Const findDishInfo = (userSavedDish) =>{}
//       Return promise
//       db.Dish.findOne()
//       Where dishId is savedDishes’ Id
//       .then(dishInfo)
//       Get clean data from dishInfo
//       This should include all dish info
//     Const results = Promise.all(actions)
//     Results.then()
//       Resolve
//       Reject 
//     Include scenario if user saved no foods
