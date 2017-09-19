const requestPromise = require('request-promise');
const restaurant = require('./restaurantData.js');
const dish = require('./dishData.js');
const postDishReview = require('./postDishReviewData.js');
const getDishReview = require('./getDishReviewData.js');
const postUser = require('./postUserData.js');
const getFridge = require('./getFridgeData.js');
const httpRequest = require('./foursquareApiCall.js');

module.exports.apiCall = httpRequest.apiCall;

// Restaurant
module.exports.getRestaurantData = restaurant.getRestaurantData;
module.exports.getDishData = dish.getDishData;

// Dish Review
module.exports.postDishReviewData = postDishReview.postDishReviewData;
module.exports.getDishReviewData = getDishReview.getDishReviewData;

// User
module.exports.postUserData =  postUser.postUserData;
module.exports.getFridgeData = getFridge.getFridgeData;