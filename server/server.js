const express = require('express')
const app = express()
const querystring = require('querystring');
const foursquare = require('../foursquare-config/foursquare-config.js')
var request = require('request')
var bodyParser = require('body-parser')
var logger = require('morgan')
var routeHandler = require('./route-handler')

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/venue',routeHandler.getVenue);
app.get('/menu',routeHandler.getMenu);

var port = 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})