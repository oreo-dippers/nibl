const connection = require('./db.js');

// Require mock data
const restaurants = require('./seedData/restaurantDataSF.js');
const users = require('./seedData/userData.js');
const dishes = require('./seedData/dishDataSFTin.js');
const dishReviews = require('./seedData/dishReviewDataSFTin.js');

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
      restaurants.restaurantData.forEach(restaurant => {
        // console.log(restaurant);

        connection.Restaurant
          .create({
            foursquareId: restaurant.foursquareId,
            name: restaurant.name,
            phone: restaurant.phone,
            address: restaurant.address,
            website: restaurant.website,
            imageUrl: restaurant.imageUrl,
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
      users.userData.forEach(user => {
        
        connection.User
          .create({
            firebaseUuid: user.userId,
            userData: user.userData
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
    .then(() => {
      // Then fill a restaurant's menu (dish table)
      dishes.dishDataSFTin.forEach(dish => {

        connection.Dish
          .create({
            foursquareEntryId: dish.foursquareEntryId,
            name: dish.name,
            imageUrl: dish.imageUrl,
            description: dish.description,
            price: dish.price
          })
          .then(() => {
            console.log(
              '!!! Running seed.js: Your dish element has been added to the database successfully!'
            );
          })
          .catch(e => {
            console.error(
              '!!! Running seed.js: There was an error adding the dish element to the database: ',
              e
            );
          });
      }); // End of adding dishData
    })
    .then(() => {
      // Then fill the restaurant dish's reviews:
      dishReviews.dishReviewDataSFTin.forEach(review => {

        connection.DishReview
          .create({
            userId: review.userId,
            dishId: review.dishId,
            review: review.review,
            starRating: review.starRating,
            imageUrl: review.imageUrl,
            upvoteTotal: 0
          })
          .then(() => {
            console.log(
              '!!! Running seed.js: Your dish review element has been added to the database successfully!'
            );
          })
          .catch(e => {
            console.error(
              '!!! Running seed.js: There was an error adding the dish review element to the database: ',
              e
            );
          });
      }); // End of adding dishReviewData
    })
    .catch(e => {
      console.error(
        '!!! Running seed.js: Database did not sync correctly. See error: ',
        e
      );
    });
});
