const db = require('../../db/db.js');

module.exports.getRestaurantData = (data) => {

  const promise = new Promise((resolve, reject) => {
    // Save data into Restaurant table
    // data.response.groups.items is the array of restaurants received
    const restaurantArray = data.response.groups[0].items;

    if (restaurantArray.length > 0) {
      // Function to findOrCreate restaurants in database
      var addRestaurantToDB = (restaurant) => {
        return new Promise((resolve) => {
          db.Restaurant.findOrCreate({
            where: {
              foursquareId: restaurant.venue.id
            },
            defaults: {
              // If it is not in the Restaurant table, set these defaults:
              foursquareId: restaurant.venue.id,
              name: restaurant.venue.name,
              phone: restaurant.venue.contact.formattedPhone,
              address: JSON.stringify(restaurant.venue.location.formattedAddress),
              website: restaurant.venue.url,
              imageUrl: JSON.stringify(restaurant.venue.featuredPhotos.items[0]),
              avgRestRating: 0
            }
          })
          .then((currentRestaurant) => {
            let {
              foursquareId, 
              name, 
              phone, 
              address, 
              website, 
              imageUrl, 
              avgRestRating
            } = currentRestaurant[0].dataValues;
            
            resolve({
              foursquareId, 
              name, 
              phone, 
              address, 
              website, 
              imageUrl, 
              avgRestRating
            });
          });
        });
      };

      // actions is to iterate through all restaurants and addRestaurantToDB
      const actions = restaurantArray.map(addRestaurantToDB);
      
      // Promise all the actions
      const results = Promise.all(actions);

      results
        .then((resultArray) => {
          if (resultArray) {
            console.log('Restaurant data resolves');
            resolve(resultArray);
          }
        });
    } else {
      console.log('Foursquare found no restaurant results');
      reject('This search result did not return any restaurants');
    }

  }); // End of promise

  return promise;
};