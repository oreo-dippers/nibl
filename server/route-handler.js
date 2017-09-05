const querystring = require('querystring');
const foursquare = require('../api-config/foursquare-config.js')
var request = require('request')
var bodyParser = require('body-parser')

module.exports.getVenue = function(req, res) {
  var url = 'https://api.foursquare.com/v2/venues/4bf9e1445ec320a11c028bd3';
  var credentials = {
    'v': '20170904'
  };
  credentials.client_id = foursquare.CLIENT_ID;
  credentials.client_secret = foursquare.CLIENT_SECRET;
  var qs = querystring.stringify(credentials);
  var urlQuery = url+ '?' + qs;
  console.log('credentials', urlQuery);

  request(urlQuery, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var x = JSON.parse(body);
    console.log('body:', x.response.venue);
    res.send('Hello foursquare venue');
  });

};


module.exports.getMenu = function(req, res) {
  var url = 'https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/menu';
  var credentials = {
    'v': '20170904'
  };
  credentials.client_id = foursquare.CLIENT_ID;
  credentials.client_secret = foursquare.CLIENT_SECRET;
  var qs = querystring.stringify(credentials);
  var urlQuery = url+ '?' + qs;
  console.log('credentials for menu', urlQuery);

  request(urlQuery, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var data = JSON.parse(body);
    // console.log('body:', data.response.menu.menus.items[0].entries);
    console.log('body:', data.response.menu.menus);
    res.send('Hello foursquare menu');
  });
};
