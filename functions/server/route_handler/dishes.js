const querystring = require('querystring');
const foursquare = require('./../api-config/foursquare-config.js');
const bodyParser = require('body-parser');
const utils = require('./../utils/util');

const credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);

module.exports.postDishReview = (req, res) => {
  utils.postDishReviewData(req)
  .then((data) => {
    console.log('dishReview Data posted successfully!');
    res.status(201).send(data);
   });
};

module.exports.getDishReview = (req, res) => {
  utils.getDishReviewData(req)
  .then((data) => {
    console.log('dishReview Data gotten successfully!');
    res.status(200).send(data);
   });
};