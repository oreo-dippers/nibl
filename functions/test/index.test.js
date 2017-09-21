// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

//import all environment variable for testing
const firebaseAppConfig = require('./firebaseApp').appConfig;

//Initialize firebase admin
admin.initializeApp = jest.fn();

//Initialize firebase functions with configvariables.
functions.config = jest.fn(() => (firebaseAppConfig));

// Mock the Firebase application
const myApp = require('../index');



// console.log('Line is 22 is running: ');
// var app = require('../index');

