const db = require('../../db/db.js');

module.exports.getDishData = function(data, foursquareId) {
  console.log('!!!Received foursquareId: ', foursquareId);
  
  // var restaurantId;
  var dishData = [];

  // Set where to start iterating over menus
  if (data.response.menu.menus.count > 0){
    var menus = data.response.menu.menus.items;
  } else {
    reject('Foursquare does not supply menu here...');
  }

  const promise = new Promise((resolve, reject) => {

    // Generate restaurantId
    // 1 Get foursquare id, ie: 40a55d80f964a52020f31ee3
    // 2 Query Restaurant database for it
    db.Restaurant.findOne({
      where: {
        foursquareId: foursquareId
      }
    })
    .then((restaurant) => {
      console.log('Restaurant id was found: ', restaurant.dataValues.id);

      // 3 A If id is found, set it
      const restaurantId = restaurant.dataValues.id;

      // 3 B If id is not there, add it to the Restaurant table
      // This may require a call to the FourSquare API)

      return restaurantId
    })
    .then((restaurantId) => {
      // Add each dish from response to database
      menus.forEach((menu) => {
        menu.entries.items.forEach((section) => {
          section.entries.items.forEach((dish) => {
            console.log('dish is ', dish);

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
            .then((dish) => {
              // Make organized data to send to front end
              let {foursquareEntryId, name, imageUrl, description, price, avgRating} = dish[0].dataValues;
              dishData.push({foursquareEntryId, name, imageUrl, description, price, avgRating});
            });
          });
        });
      }); // End outermost forEach
    }).then(() => {
      console.log('!!! dishData is: ', dishData);
      if(dishData.length > 0) {
        console.log('Dish data resolves');
        resolve(dishData);
      } else {
        reject('No data');
      }
    });

    // setTimeout(function() {
    //   if(dishData.length > 0) {
    //     console.log('Dish data resolves');
    //     resolve(dishData);
    //   } else {
    //     reject('No data');
    //   }
    // }, 1000);

  }); // End of promise

  return promise;
};