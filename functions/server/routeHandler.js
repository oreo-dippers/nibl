const querystring = require('querystring');
// const foursquare = require('./../api-config/foursquare-config.js');
const bodyParser = require('body-parser');
const utils = require('./utils/util');
const dishes = require('./route_handler/dishes');
const restaurants = require('./route_handler/restaurants');
const user = require('./route_handler/user');
const db = require('./../db/db.js');

// var credentials = {
//   'v': '20170904'
// };
// credentials.client_id = foursquare.CLIENT_ID;
// credentials.client_secret = foursquare.CLIENT_SECRET;
// const qs = querystring.stringify(credentials);

// module.exports.getVenue = function(req, res) {
//   const url = 'https://api.foursquare.com/v2/venues/4bf9e1445ec320a11c028bd3';
//   const urlQuery = url+ '?' + qs;
//   utils.apiCall(urlQuery, function(data) {
//     res.send(data.response.venue);
//   });

// };

module.exports.seeds = function(req, res) {
  const db = require('./../db/seed.js');
  res.send('Data Seeded');
};

module.exports.getMenu = restaurants.getMenu;

module.exports.getRestaurants = restaurants.getRestaurants;

module.exports.postDishReview = dishes.postDishReview;


module.exports.getDummy = function(req, res) {
  console.log('This dummy is working')
};