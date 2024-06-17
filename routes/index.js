var express = require('express');
var router = express.Router();
var auth = require("../connections/firebase-conn.js")
var { createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword ,GoogleAuthProvider, GithubAuthProvider } = require("firebase/auth")
var db = require("../connections/firestore.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

router.get('/user', function(req, res, next) {
  res.render("user", {
    user: auth.currentUser
  })
});

router.get("/register", function(req, res, next){
  res.render("auth/register_user")
})

router.post("/register", function(req, res, next){

  createUserWithEmailAndPassword(auth, req.body.email, req.body.password).then((user) => {

        res.redirect("/login")

  }).catch((error) => {

    res.status(500).send(error)

  })
})

router.get("/login", function(req, res, next){
  res.render("auth/login")
})

router.post("/login", function(req, res, next) {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password).then((user) => {
    res.redirect("/user")
  }).catch((error) => {
    res.status(500).send(error)
  })

})

router.post("/login/google", function(req, res, next){

  const idToken = req.body.credential;
  const credential = GoogleAuthProvider.credential(idToken);

  signInWithCredential(auth, credential).then((user) => {

      res.redirect("/user")

  }).catch((error) => {

    console.log(error)
    res.status(500).send("erro ao logar")

  })

})

module.exports = router;
