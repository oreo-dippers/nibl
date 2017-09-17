const db = require('../../db/db.js');

module.exports.getDishData = function(data, foursquareId) {
  console.log('!!!Received foursquareId: ', foursquareId);
  
  // var restaurantId;
  var dishData = [];

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

      return restaurantId;
    })
    .then((restaurantId) => {
      console.log('Menu count is ', data.response.menu.menus.count);
      // Set where to start iterating over menus
      if (data.response.menu.menus.count > 0){

        var menus = data.response.menu.menus.items;
        var dishesToAddArray = [];

        menus.forEach((menu) => {
          menu.entries.items.forEach((section) => {
            section.entries.items.forEach((dish) => {
              dishesToAddArray.push(dish);
            });
          });
        });
      
        var fn = function(dish) {
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
                avgRating: 0
              }
            })
            .then((currentDish) => {
              // Make organized data to send to front end
              var {foursquareEntryId, name, imageUrl, description, price, avgRating} = currentDish[0].dataValues;

              console.log('Dish Item added to db is ', {foursquareEntryId, name, imageUrl, description, price, avgRating});

              // return currentDish;
              resolve({foursquareEntryId, name, imageUrl, description, price, avgRating});
              // dishData.push({foursquareEntryId, name, imageUrl, description, price, avgRating});
            });
          });
        };

        var actions = dishesToAddArray.map(fn);

        var results = Promise.all(actions);
        
        results
          .then(dishArray => {
            console.log('!!! Returned correctly. dishArray is ', dishArray);
            return dishArray;
            })
          .then((dishArray) => {
            console.log('!!! dishData is: ', dishArray);
            if(dishArray) {
              console.log('Dish data resolves');
              resolve(dishArray);
            } 
            else {
              console.log('Dish data rejects/no data');
              reject(dishArray);
            }
          });

        // // Add each dish from response to database
        // menus.forEach((menu) => {
        //   menu.entries.items.forEach((section) => {
        //     section.entries.items.forEach((dish) => {
        //       console.log('dish is ', dish);

        //       db.Dish.findOrCreate({
        //         where: {
        //           foursquareEntryId: dish.entryId,
        //         },
        //         defaults: {
        //           // If it is not in the Dish table, set these defaults:
        //           restaurantId: restaurantId,
        //           foursquareEntryId: dish.entryId,
        //           name: dish.name,
        //           imageUrl: '',
        //           description: dish.description,
        //           price: dish.price,
        //           avgRating: 0
        //         }
        //       })
        //       .then((currentDish) => {
        //         // Make organized data to send to front end
        //         var {foursquareEntryId, name, imageUrl, description, price, avgRating} = currentDish[0].dataValues;

        //         console.log({foursquareEntryId, name, imageUrl, description, price, avgRating});

        //         dishData.push({foursquareEntryId, name, imageUrl, description, price, avgRating});
        //       });
        //     });
        //   });
        // }); // End outermost forEach
      } else {
        console.log('Foursquare does not supply menu here');
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