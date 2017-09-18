const request = require('request');
var requestPromise = require('request-promise');
const db = require('../db/db.js');

module.exports.apiCall = function(url, callback) {
  requestPromise(url)
    .then(function(data) {
      callback(JSON.parse(data));
    })
    .catch(function (err) {
      console.log('error:', err);
      return;
    });
};

module.exports.getDishData = function(data) {
  var promise = new Promise(function(resolve, reject) {

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
              avgDishRating: 0
            }
          })
          .then(function(dish) {
            // Make organized data to send to front end
            let {foursquareEntryId, name, imageUrl, description, price, avgDishRating} = dish[0].dataValues;
            dishData.push({foursquareEntryId, name, imageUrl, description, price, avgDishRating});
          });
        });
      });
    });

    setTimeout(function() {
      if(dishData.length > 0) {
        console.log('dish data resolves');
        resolve(dishData);
      } else {
        reject('No data');
      }
    }, 1000);

  });

  return promise;
}

module.exports.getRestaurantData = function(data) {
  var promise = new Promise(function(resolve, reject) {

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
          avgRestRating: 0
        }
      })
      .then(function(restaurant) {
        let {foursquareId, name, phone, address, imageUrl, avgRestRating} = restaurant[0].dataValues;
        restaurantData.push({foursquareId, name, phone, address, imageUrl, avgRestRating});
      });
    }); // forEach ends

    setTimeout(function() {
      if(restaurantData.length > 0) {
        console.log('restaurant data resolves');
        resolve(restaurantData);
      } else {
        reject('No data');
      }
    }, 1000);

  });

  return promise;
};