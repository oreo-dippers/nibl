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
    // 1 Get data that I want from API
    // 2 Check if it is in database
    // 2 A If not in db, save it into the database
    // 2 B If in db, retrieve rating from db
    // 3 Send all restaurant menu data to front end with ratings
    // 4 *IMPORTANT* Get restaurant Id!!!

    // Menus array:
    // console.log('Array 1: This is an array of different menus a restaurant might have', data.response.menu.menus.items);
    // console.log('For example, this is the first element of the the first menu in the array', data.response.menu.menus.items[0]);

    // Section array:
    // console.log('Array 2: This is an array inside of the first element of the first menu in the array', data.response.menu.menus.items[0].entries.items);
    // console.log('This is the first element (section) of the array inside the first element of the first menu in the array', data.response.menu.menus.items[0].entries.items[0]);

    // Dishes array:
    // console.log('Array 3: This is an array of the dishes in the first section of the dinner menu array', data.response.menu.menus.items[0].entries.items[0].entries.items);
    // console.log('This is the first dish in the first section of the dinner menu array', data.response.menu.menus.items[0].entries.items[0].entries.items[0]);

    // Generate restaurantId
    // 1 Get foursquare API id, ie: 40a55d80f964a52020f31ee3
    // 2 Query Restaurant database for it
    // 3 A If id is there, set it
    var restaurantId = 222;  // This is a hardcoded example
    // 3 B If id is not there, add it to the Restaurant table
    // This may require a call to the FourSquare API)

    var menus = data.response.menu.menus.items;
    var dishData = [];

    menus.forEach(function(menu) {
      // console.log('menu is: ', menu);
      menu.entries.items.forEach(function(section) {
        // console.log('section is: ', section);
        section.entries.items.forEach(function(dish) {
          // console.log('dish is: ', dish);

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
            console.log(dish);
            // let {foursquareId, name, phone, address, imageUrl, avgRating} = restaurant[0].dataValues;
            // restaurantData.push({foursquareId, name, phone, address, imageUrl, avgRating});
          });
        });
      });
    });

    res.send(data);
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
