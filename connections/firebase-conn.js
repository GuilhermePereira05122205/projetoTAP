
var {initializeApp} = require("firebase/app")
var {getAuth} = require("firebase/auth")
var {getFirestore} = require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD_y4yDUMqxIR_ZAlHN2JuqNt1UD59kJtk",
  authDomain: "projetotap-7a77c.firebaseapp.com",
  projectId: "projetotap-7a77c",
  storageBucket: "projetotap-7a77c.appspot.com",
  messagingSenderId: "133650377996",
  appId: "1:133650377996:web:caf5372abb89c1d5892d29",
  measurementId: "G-FPD2HLPGDJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

module.exports = auth