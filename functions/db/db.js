const functions = require("firebase-functions");
const Sequelize = require("sequelize");
// For local variable loading
const dotenv = require("dotenv");
dotenv.load();
console.log('This is the value', functions.config().postgres.postgres_url);
// Make new Sequelize instance to PG DB linked
const db = new Sequelize(functions.config().postgres.postgres_url);

// Ensure db makes connection
db
  .authenticate()
  .then(() => {
    console.log("Postgres Database connection established successfully!");
  })
  .catch(err => {
    console.error("Postgres Database connection failed: ", err);
  });

// Table 1: User (in DB will be: users)
// This is the table of all our users.
const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firebaseUuid: Sequelize.STRING
});

// Table 2: Restaurant (in DB will be: restaurants)
// This is the table of restaurants that have been
// retrieved from the Foursquare API.
// To get avgRating, we calculate the avgRatings
// of all the dishes a restaurant has.
const Restaurant = db.define("restaurant", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  foursquareId: Sequelize.STRING,
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.STRING,
  website: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  avgRating: Sequelize.FLOAT
});

// Table 3: Dish (in DB will be: dishes)
// This is the table of dishes (or menu items) that have been
// retrieved from the Foursquare API.
// To get avgRating, we calculate the starRatings
// from dishReviews.
const Dish = db.define("dish", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  foursquareEntryId: Sequelize.STRING,
  name: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
  avgRating: Sequelize.FLOAT
});

// Table 4: DishReview (in DB will be: dishReviews)
// This is the table of reviews for dishes.
// A user can only leave one review per dish.
const DishReview = db.define("dishReview", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // String length must be between 1 to 140
      len: {
        args: [1, 140],
        msg:
          "The review must be at least 1 character and up to 140 characters long"
      }
    }
  },
  starRating: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING,
  upvoteTOtal: Sequelize.INTEGER
});

// Table 5: DishReviewUpvote (in DB will be: dishReviewUpvotes)
// This is the table of upvotes for reviews of dishes.
// A user can only upvote once per dishReview.
const DishReviewUpvote = db.define("dishReviewUpvote", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  upvote: Sequelize.BOOLEAN
});

// Table 6: UserDish (in DB will be: userDishes)
// This is the table of all dishes that a user saves
// that they are interested in, so that they can order next time.
// This is necessary so that the table will be 'userDishes'
// instead of 'UserDish' in DB.
// This way we can refer to it like Tables 1-5.
const UserDish = db.define("userDish", {});

// Table 7: UserRestaurant (in DB will be: userRestaurants)
// This is the table of all restaurants that a user saves
// that they are interested in, so that they can visit next time.
// This is necessary so that the table will be 'userRestaurants'
// instead of 'UserRestaurant' in DB.
// This way we can refer to it like Tables 1-5.
const UserRestaurant = db.define("userRestaurant", {});

// Table 8: SearchResult (in DB will be: searchResults)
// This is the table of search queries that users make.
// In the case that the Foursquare API goes down, we may
// be able to give the user a response if their query
// already exists in this table.
const SearchResult = db.define("searchResult", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  queryString: Sequelize.STRING,
  result: Sequelize.JSON
});

// Define Table Associations
// Dish's Associations
Dish.belongsTo(Restaurant);
Restaurant.hasMany(Dish);
// DishReview's Associations
User.belongsToMany(Dish, { through: DishReview });
Dish.belongsToMany(User, { through: DishReview });
// DishReviewUpvote's Associations
User.belongsToMany(DishReview, { through: DishReviewUpvote });
DishReview.belongsToMany(User, { through: DishReviewUpvote });
// UserDish's Associations
User.belongsToMany(Dish, { through: UserDish });
Dish.belongsToMany(User, { through: UserDish });
// UserRestaurant's Associations
User.belongsToMany(Restaurant, { through: UserRestaurant });
Restaurant.belongsToMany(User, { through: UserRestaurant });
// SearchResult's Associations
SearchResult.belongsTo(User);
User.hasMany(SearchResult);

// Sync the database
db.sync({
  logging: console.log
});

module.exports = {
  db: db,
  User: User,
  Restaurant: Restaurant,
  Dish: Dish,
  DishReview: DishReview,
  DishReviewUpvote: DishReviewUpvote,
  UserDish: UserDish,
  UserRestaurant: UserRestaurant,
  SearchResult: SearchResult
};
