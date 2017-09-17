const db = require('../../db/db.js');

module.exports.getDishData = function(data, foursquareId) {
  
  const promise = new Promise((resolve, reject) => {
    // Query Restaurant database for restaurantId
    db.Restaurant.findOne({
      where: {
        foursquareId: foursquareId
      }
    })
    .then((restaurant) => {
      // 1 If id is found, set it
      const restaurantId = restaurant.dataValues.id;

      // 2 If id is not there, add it to the Restaurant table
      // This may require a call to the FourSquare API)
      // TODO

      return restaurantId;
    })
    .then((restaurantId) => {
      // Not all restaurants have menus
      console.log('Menu count is ', data.response.menu.menus.count);

      // If there is a menu
      if (data.response.menu.menus.count > 0){
        // Set where to start iterating over menus
        var menus = data.response.menu.menus.items;
        var dishesToAddArray = [];

        // Get all dishes from menu
        menus.forEach((menu) => {
          menu.entries.items.forEach((section) => {
            section.entries.items.forEach((dish) => {
              dishesToAddArray.push(dish);
            });
          });
        });
      
        // Function to findOrCreate dishes in database
        var addDishToDB = function(dish) {
          return new Promise((resolve) => {
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
            .then((currentDish) => {
              // Make organized data to send to front end
              let {foursquareEntryId, name, imageUrl, description, price, avgDishRating} = currentDish[0].dataValues;

              resolve({foursquareEntryId, name, imageUrl, description, price, avgDishRating});
            });
          });
        };

        // actions is to iterate through all dishes and addDishToDB
        var actions = dishesToAddArray.map(addDishToDB);

        // Promise all the actions
        var results = Promise.all(actions);
        
        // Use the results of Promise.all
        results
          .then((dishArray) => {
            console.log('!!! dishArray is: ', dishArray);
            if(dishArray) {
              console.log('Dish data resolves');
              resolve(dishArray);
            } 
          });
      } else {
        console.log('Foursquare does not supply menu here');
        reject('This restaurant does not have a menu');
      }
    });

  }); // End of promise

  return promise;
};