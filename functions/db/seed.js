const connection = require('./db.js');

// Require mock data
const restaurants = require('./seedData/restaurantDataSF.js');
const users = require('./seedData/userData.js');
const dishes = require('./seedData/dishDataSFTin.js');
const dishReviews = require('./seedData/dishReviewDataSFTin.js');
const savedDishes = require('./seedData/userDishData.js');

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
      // 1 First restaurant table
      restaurants.restaurantDataSF.forEach(restaurant => {

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
      // 2 Fill user table
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
      // 3 Fill a restaurant's menu (dish table)
      dishes.dishDataSFTin.forEach(item => {

        connection.Dish
          .create({
            foursquareEntryId: item.foursquareEntryId,
            name: item.name,
            imageUrl: item.imageUrl,
            description: item.description,
            price: item.price,
            avgDishRating: 0,
            restaurantId: 1 // in this case-- update as needed
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
      // 4 Fill the restaurant dish's reviews:
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
    .then(() => {
      // 5 Fill the user's saved dishes (fridge):
      savedDishes.userDishData.forEach(entry => {

        connection.UserDish
          .create({
            userId: entry.userId,
            dishId: entry.dishId,
          })
          .then(() => {
            console.log(
              '!!! Running seed.js: Your saved dish (userDish) element has been added to the database successfully!'
            );
          })
          .catch(e => {
            console.error(
              '!!! Running seed.js: There was an error adding the saved dish (userDish) review element to the database: ',
              e
            );
          });
      }); // End of adding userDishData
    })
    .catch(e => {
      console.error(
        '!!! Running seed.js: Database did not sync correctly. See error: ',
        e
      );
    });
});
