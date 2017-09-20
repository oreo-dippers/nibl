const connection = require('./db.js');

// Require mock data
const restaurants = require('./seedData/restaurantDataSF.js');
const users = require('./seedData/userData.js');

// To seed
// 1 Drop the tables
// 2 Populate with mock data from seedData folder

// Step 1: Drop the tables
connection.db.drop().then(() => {
  // After dropped, show confirmation
  console.log('!!! Running seed.js: Tables have been dropped');

  // Set up the database tables again
  connection.db
    .sync()
    .then(() => {
      // Seed database with mock data
      // First restaurant table
      restaurants.restaurantData.forEach(element => {
        // console.log(element);

        connection.Restaurant
          .create({
            foursquareId: element.foursquareId,
            name: element.name,
            phone: element.phone,
            address: element.address,
            website: element.website,
            imageUrl: element.imageUrl,
            avgRestRating: 0
          })
          .then(() => {
            console.log(
              '!!! Running seed.js: Your restaurant element has been added to the database successfully!'
            );
          })
          .catch(e => {
            console.error(
              '!!! Running seed.js: There was an error adding the restaurant element to the database: ',
              e
            );
          });
      }); // End adding restaurantData
    })
    .then(() => {
      // Then fill user table
      users.userData.forEach(element => {
        
        connection.User
          .create({
            firebaseUuid: element.userId,
            userData: element.userData
          })
          .then(() => {
            console.log(
              '!!! Running seed.js: Your user element has been added to the database successfully!'
            );
          })
          .catch(e => {
            console.error(
              '!!! Running seed.js: There was an error adding the user element to the database: ',
              e
            );
          });
      }); // End adding userData
    })
    .catch(e => {
      console.error(
        '!!! Running seed.js: Database did not sync correctly. See error: ',
        e
      );
    });
});
