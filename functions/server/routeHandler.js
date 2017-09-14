const querystring = require('querystring')
const foursquare = require('../../api-config/foursquare-config.js')
const bodyParser = require('body-parser')
const utils = require('./utils/util')
const restaurants = require('./route_handler/restaurants');

var credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);

module.exports.getVenue = function(req, res) {
  const url = 'https://api.foursquare.com/v2/venues/4bf9e1445ec320a11c028bd3';
  const urlQuery = url+ '?' + qs;
  utils.apiCall(urlQuery, function(data) {
    res.send(data.response.venue);
  });

};

module.exports.getMenu = restaurants.getMenu;

module.exports.getRestaurants = restaurants.getRestaurants;


module.exports.getDummy = function(req, res) {
  console.log('This dummy is working')
};