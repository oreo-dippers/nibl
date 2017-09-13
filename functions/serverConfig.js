const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const routeHandler = require('./routeHandler');
const path = require('path');
const db = require('./db/db.js');
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/venue',routeHandler.getVenue);
app.get('/menu',routeHandler.getMenu);

//REST endpoint for searching restaurants nearby
app.get('/api/restaurants/', routeHandler.getRestaurants);

//REST endpoint for getting detail of single restaurant
app.get('/api/restaurants/page', routeHandler.getDummy);

//REST endpoint for posting review of a dish
app.post('/api/dishes/review', routeHandler.getDummy);

//REST endpoint for getting user profile
app.get('/api/user', routeHandler.getDummy);

//REST endpoint for saving user profile
app.post('/api/user', routeHandler.getDummy);

//REST endpoint for getting user saved Dish
app.get('/api/user/fridge', routeHandler.getDummy);

//REST endpoint for saving dish user want to eat later.
app.post('/api/user/fridge', routeHandler.getDummy);

//REST endpoint for getting user saved restaurants
app.get('/api/user/saved-restaurants', routeHandler.getDummy);

//REST endpoint for saving restaurants user want to visit later.
app.post('/api/user/saved-restaurants', routeHandler.getDummy);


app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});


module.exports = app;
