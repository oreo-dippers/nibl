const Sequelize = require("sequelize");

// For local variable loading
const dotenv = require("dotenv");
dotenv.load();

// Make new Sequelize instance to PG DB linked
const db = new Sequelize(process.env.POSTGRES_URL);

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
const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firebaseUuid: Sequelize.STRING
});

// Table 2: Restaurant (in DB will be: restaurants)
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
const Dish = db.define('dish', {
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

// Define Table Associations
// Dish's Associations
Dish.belongsTo(Restaurant);
Restaurant.hasMany(Dish);

// Sync the database
db.sync();

module.exports = {
  db: db,
  User: User,
  Restaurant: Restaurant
};
