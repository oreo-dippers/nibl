const querystring = require('querystring')
const foursquare = require('../api-config/foursquare-config.js')
const request = require('request')
const bodyParser = require('body-parser')
const utils = require('./util')

var credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
var qs = querystring.stringify(credentials);

module.exports.getVenue = function(req, res) {
  var url = 'https://api.foursquare.com/v2/venues/4bf9e1445ec320a11c028bd3';
  var urlQuery = url+ '?' + qs;

  request(urlQuery, function (error, response, body) {
    // Print the error if one occurred
    if(error) {
      console.log('error:', error);
    }

    // Print the response status code if a response was received
    if(response) {
      console.log('statusCode:', response && response.statusCode);
    }
    var data = JSON.parse(body);
    res.send(data.response.venue);
  });

};


module.exports.getMenu = function(req, res) {
  var url = 'https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/menu';
  var urlQuery = url+ '?' + qs;

  request(urlQuery, function (error, response, body) {
    // Print the error if one occurred
    if(error) {
      console.log('error:', error);
    }

    // Print the response status code if a response was received
    if(response) {
      console.log('statusCode:', response && response.statusCode);
    }

    res.send(JSON.parse(body));
  });
};

module.exports.getRestaurants = function(req, res) {
  var url = 'https://api.foursquare.com/v2/venues/explore';
  var myQuery = req.query;
  var parameterObj = {
    'venuePhotos': '1',
  };
  parameterObj.query = myQuery.query;
  parameterObj.near = myQuery.near;
  parameterObj.radius = myQuery.radius;
  var parameter = querystring.stringify(parameterObj);
  const urlQuery = url+ '?' + parameter + '&' + qs;

  utils.apiCall(urlQuery, function(data) {
    res.send(data);
  });

};
