const querystring = require('querystring');
const foursquare = require('./../api-config/foursquare-config.js');
const bodyParser = require('body-parser');
const utils = require('./../utils/util');

var credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);

module.exports.postDishReview = function(req, res) {
  utils.postDishReviewData(req)
  .then(function(data) {
    console.log('dishReview Data posted successfully!');
    res.status(201).send(data);
   });
};