const functions = require("firebase-functions");
const admin = require('firebase-admin');
var app = require('./serverConfig');
console.log('This is the value', functions.config());
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
