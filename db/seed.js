const connection = require('./db.js');
const restaurantData = require('./seedData/restaurantData.json');

// To seed
// 1 Drop the tables
// 2 Populate with mock data from seedData folder

// Step 1: Drop the tables
connection.db.drop()
  .then(function() {
    // After dropped, show confirmation
    console.log('!!! Running seed.js: Tables have been dropped');

    // Set up the database tables again
    connection.db.sync()
      .then(function() {
        // Seed database with mock data

        // Start with restaurant table
        restaurantData.forEach(function(element) {
          console.log(element);

          connection.Restaurant.create({
            foursquareId: element.foursquareId,
            name: element.name,
            phone: element.phone,
            address: element.address,
            website: element.website,
            imageUrl: element.imageUrl,
            avgRating: element.avgRating
          })
          .then(function() {
            console.log('!!! Running seed.js: Your element has been added to the database successfully!');
          })
          .catch(function(e) {
            console.error('!!! Running seed.js: There was an error adding the element to the database: ', e);
          });
        });
      })
      .catch(function(e) {
        console.error('!!! Running seed.js: Database did not sync correctly. See error: ', e);
      });
  });