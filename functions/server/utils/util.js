const requestPromise = require('request-promise');
const restaurant = require('./restaurantData.js');
const dish = require('./dishData.js');
const httpRequest = require('./foursquareApiCall.js');

module.exports.apiCall = httpRequest.apiCall;

module.exports.getRestaurantData = restaurant.getRestaurantData;

module.exports.getDishData = dish.getDishData;