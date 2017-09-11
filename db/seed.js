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
  });