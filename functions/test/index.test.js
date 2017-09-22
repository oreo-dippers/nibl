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

const request = require('supertest');
//Add sum to application and test it
const sum = require('./../sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


describe('Test the test path', () => {
    test('It should response the GET method', (done) => {
        request(myApp.app)
          .get('/test')
          .then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


describe('Test the restaurant path', () => {
    test('It should response the GET method for /api/restaurants/', (done) => {
        request(myApp.app)
          .get('/api/restaurants/')
          .query({
            query: 'taco',
            near: 'San Francisco, CA, United States',
            radius: '5000'
          })
          .then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


describe('Test the restaurant menu path', () => {
    test('It should response the GET method for /api/restaurants/page path', (done) => {
        request(myApp.app)
          .get('/api/restaurants/page')
          .query({
            foursquareId: '5600850a498edff486fdfe89',
          })
          .then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
