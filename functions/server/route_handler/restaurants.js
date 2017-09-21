const querystring = require('querystring');
const foursquare = require('./../api-config/foursquare-config.js');
const utils = require('./../utils/util');

var credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);

module.exports.getRestaurants = (req, res) => {
  const url = 'https://api.foursquare.com/v2/venues/explore';
  var myQuery = req.query;
  var parameterObj = {
    'venuePhotos': '1',
    'limit': '10'
  };
  parameterObj.query = myQuery.query;
  parameterObj.near = myQuery.near;
  parameterObj.radius = myQuery.radius;
  const parameter = querystring.stringify(parameterObj);
  const urlQuery = url + '?' + parameter + '&' + qs;

  utils.apiCall(urlQuery, function(data) {
    utils.getRestaurantData(data)
      .then(restaurantData => {
        console.log('Restaurant Data sent to front end');
        res.status(200).send(restaurantData);
      })
      .catch(err => {
        res.status(200).send(err);
      });
  });
};

// Reached at localhost:3006/menu
module.exports.getMenu = (req, res) => {
  console.log('FoursquareId received is ', req.query.foursquareId);
  const url = 'https://api.foursquare.com/v2/venues/';
  const foursquareId = req.query.foursquareId;
  const urlQuery = url + foursquareId + '/menu' + '?' + qs;
  console.log('urlQuery is ', urlQuery);

  utils.apiCall(urlQuery, function(data) {
    utils.getDishData(data, foursquareId)
      .then(dishData => {
        console.log('dishData sent to front end');
        res.status(200).send(dishData);
      })
      .catch(err => {
        res.status(200).send(err);
      });
  });
};
