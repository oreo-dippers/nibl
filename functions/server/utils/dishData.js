const db = require('../../db/db.js');

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

    setTimeout(function() {
      if(dishData.length > 0) {
        console.log('Dish data resolves');
        resolve(dishData);
      } else {
        reject('No data');
      }
    }, 1000);

  });

  return promise;
};