const Sequelize = require('sequelize');

// For local variable loading
const dotenv = require('dotenv');
dotenv.load();

// Make new Sequelize instance to PG DB linked
const db = new Sequelize(process.env.POSTGRES_URL);

// Ensure db makes connection 
db
  .authenticate()
  .then(() => {
    console.log('Postgres Database connection established successfully!');
  })
  .catch(err => {
    console.error('Postgres Database connection failed: ', err);
  });


// Table 1: User (in DB will be: users)
const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firebaseUuid: Sequelize.STRING
});


// Sync the database
db.sync();


module.exports = {
  db: db,
  User: User
};