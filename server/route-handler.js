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


module.exports.getMenu = function(req, res) {
  const url = 'https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/menu';
  const urlQuery = url+ '?' + qs;
  utils.apiCall(urlQuery, function(data) {
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

    utils.getRestaurantData(data, function(restaurantData){
        // res.send(restaurantData);
        console.log('This this finally worked');
    });



    // Save data into Restaurant table
    //data.response.groups.items is the array of restaurants received
    // var restaurantArray = data.response.groups[0].items;
    // var restaurantData = [];

    // // Add each restaurant from response to database
    // restaurantArray.forEach(function (element) {
    //   db.Restaurant.findOrCreate({
    //     where: {
    //       foursquareId: element.venue.id
    //     },
    //     defaults: {
    //       // If it is not in the Restaurant table, set these defaults:
    //       foursquareId: element.venue.id,
    //       name: element.venue.name,
    //       phone: element.venue.contact.formattedPhone,
    //       address: JSON.stringify(element.venue.location.formattedAddress),
    //       website: element.venue.url,
    //       imageUrl: JSON.stringify(element.venue.featuredPhotos.items[0]),
    //       avgRating: 0
    //     }
    //   })
    //   .then(function(restaurant) {
    //     // console.log('************************************************\n', restaurant);
    //     // This gets 1 restaurants ratings:
    //     console.log('Here is this restaurants rating: ', restaurant[0].dataValues);
    //     let {foursquareId, name, phone, address, imageUrl, avgRating} = restaurant[0].dataValues;
    //     // console.log('Here is this restaurants rating: ', restaurant[0].dataValues.avgRating);

    //     restaurantData.push({foursquareId, name, phone, address, imageUrl, avgRating});
    //   });
    // });
    // Info for 1st restaurant only
    // console.log('Restaurant data :', restaurantArray[0]);
    // console.log('Restaurant data foursquare -id :', restaurantArray[0].venue.id);
    // console.log('foursquare name :', restaurantArray[0].venue.name);
    // console.log('foursquare contact :', restaurantArray[0].venue.contact.formattedPhone);
    // console.log('foursquare location :', restaurantArray[0].venue.location.formattedAddress); // JSON.stringify
    // console.log('foursquare website :', restaurantArray[0].venue.url);
    // console.log('foursquare photo :', restaurantArray[0].venue.featuredPhotos.items[0]); // JSON.stringify
    res.send(data);
    // res.send(restaurantData);
  });
};
