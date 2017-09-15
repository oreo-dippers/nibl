const functions = require("firebase-functions");
module.exports.CLIENT_ID = functions.config().foursquare.client_id;
module.exports.CLIENT_SECRET = functions.config().foursquare.client_secret;