const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const routeHandler = require('./route-handler')
const path = require('path')
const db = require('../db/db.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', function (req, res) {
//   res.render('/index');
// })

app.get('/venue',routeHandler.getVenue);
app.get('/menu',routeHandler.getMenu);
app.get('/api/restaurants/',routeHandler.getRestaurants);


app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'))
})
module.exports = app;
