const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("hi from express");
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
