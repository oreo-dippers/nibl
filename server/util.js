const request = require('request');
const db = require('../db/db.js');

module.exports.apiCall = function(url, callback) {
    request(url, function (error, response, body) {
    // Print the error if one occurred
    if(error) {
      console.log('error:', error);
      return;
    }
    // Print the response status code if a response was received
    if(response) {
      console.log('statusCode:', response && response.statusCode);
    }

    callback(JSON.parse(body));
  });
};

module.exports.getRestaurantData = function(data) {
  var promise = new Promise(function(resolve, reject){

    // Save data into Restaurant table
    //data.response.groups.items is the array of restaurants received
    var restaurantArray = data.response.groups[0].items;
    var restaurantData = [];

    // Add each restaurant from response to database
    restaurantArray.forEach(function (element) {
      db.Restaurant.findOrCreate({
        where: {
          foursquareId: element.venue.id
        },
        defaults: {
          // If it is not in the Restaurant table, set these defaults:
          foursquareId: element.venue.id,
          name: element.venue.name,
          phone: element.venue.contact.formattedPhone,
          address: JSON.stringify(element.venue.location.formattedAddress),
          website: element.venue.url,
          imageUrl: JSON.stringify(element.venue.featuredPhotos.items[0]),
          avgRating: 0
        }
      })
      .then(function(restaurant) {
        let {foursquareId, name, phone, address, imageUrl, avgRating} = restaurant[0].dataValues;
        restaurantData.push({foursquareId, name, phone, address, imageUrl, avgRating});
      });
    }); // forEach ends

    setTimeout(function(){
      if(restaurantData.length > 0){
        console.log('This thing is working')
        resolve(restaurantData);
      } else {
        reject('No data');
      }
    }, 200);

  });

  return promise;
};