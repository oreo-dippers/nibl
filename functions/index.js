const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const app = require('./endpoints')
const express = require("express");
const app = express();



app.get('/test', (req, res) => {
  res.send('hi from express');
});


app.post('/querydishes', (req, res) => {
  console.log('hi from /querydishes')
  res.send('hi from /querydishes')
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
