const requestPromise = require('request-promise');
const restaurant = require('./restaurantData.js');
const dish = require('./dishData.js');
const dishReview = require('./dishReviewData.js');
const getDishReview = require('./getDishReviewData.js');
const postUser = require('./postUserData.js');
const httpRequest = require('./foursquareApiCall.js');

module.exports.apiCall = httpRequest.apiCall;

// Restaurant
module.exports.getRestaurantData = restaurant.getRestaurantData;
module.exports.getDishData = dish.getDishData;

// Dish Review
module.exports.postDishReviewData = dishReview.postDishReviewData;
module.exports.getDishReviewData = getDishReview.getDishReviewData;

// User
module.exports.postUserData =  postUser.postUserData;