const querystring = require('querystring')
const foursquare = require('../api-config/foursquare-config.js')
const bodyParser = require('body-parser')
const utils = require('./util')
const db = require('../db/db.js');

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

// Reached at localhost:3006/menu
module.exports.getMenu = function(req, res) {
  const url = 'https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/menu';
  // here is another url to play with to ensure code below works
  // const url = 'https://api.foursquare.com/v2/venues/47a1bddbf964a5207a4d1fe3/menu';
  const urlQuery = url+ '?' + qs;
  utils.apiCall(urlQuery, function(data) {

    // Generate restaurantId
    // 1 Get foursquare API id, ie: 40a55d80f964a52020f31ee3
    // 2 Query Restaurant database for it
    // 3 A If id is found, set it
    var restaurantId = 1;  // This is a hardcoded example that attaches to a seeded restaurant
    // 3 B If id is not there, add it to the Restaurant table
    // This may require a call to the FourSquare API)

    var menus = data.response.menu.menus.items;
    var dishData = [];

    // Add each dish from response to database
    menus.forEach(function(menu) {
      menu.entries.items.forEach(function(section) {
        section.entries.items.forEach(function(dish) {

          db.Dish.findOrCreate({
            where: {
              foursquareEntryId: dish.entryId,
            },
            defaults: {
              // If it is not in the Dish table, set these defaults:
              restaurantId: restaurantId,
              foursquareEntryId: dish.entryId,
              name: dish.name,
              imageUrl: '',
              description: dish.description,
              price: dish.price,
              avgRating: 0
            }
          })
          .then(function(dish) {
            // Make organized data to send to front end
            let {foursquareEntryId, name, imageUrl, description, price, avgRating} = dish[0].dataValues;
            dishData.push({foursquareEntryId, name, imageUrl, description, price, avgRating});
          });
        });
      });
    });

    res.send(dishData);
  });
};

module.exports.getRestaurants = function(req, res) {
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
  const urlQuery = url+ '?' + parameter + '&' + qs;

  utils.apiCall(urlQuery, function(data) {
    utils.getRestaurantData(data)
      .then(function(restaurantData){
        console.log('This this finally worked');
        res.send(restaurantData);
       })
  });
};
