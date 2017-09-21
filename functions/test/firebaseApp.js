const runtimeConfig  = require('./../.runtimeconfig');
const firebaseConfig  = require('./firebaseConfig').config;

module.exports.appConfig = {
  "foursquare": {
    "client_secret": runtimeConfig.foursquare.client_secret,
    "client_id": runtimeConfig.foursquare.client_id,
  },
  "postgres": {
    "postgres_url": runtimeConfig.postgres.postgres_url,
  },
  "firebase": {
    "apiKey": firebaseConfig.apiKey, 
    "authDomain": firebaseConfig.authDomain, 
    "databaseURL": firebaseConfig.databaseURL, 
    "projectId": firebaseConfig.projectId, 
    "storageBucket": firebaseConfig.storageBucket, 
    "messagingSenderId": firebaseConfig.messagingSenderId
  }
};