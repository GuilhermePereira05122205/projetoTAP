var {initializeApp, cert} = require("firebase-admin/app")
var {getFirestore} = require("firebase-admin/firestore")
const serviceAccount = require('./auth/auth.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db