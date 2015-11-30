var express = require('express');
var router = express.Router();
var passport = require('passport');
var async = require('async');
var bcrypt = require('bcrypt');
var models = require('../models'),
  User = models.User;
var authCtrl = require('../controllers/auth');

/* GET home page. */
router.get('/', authCtrl.root.get);

/**AUTH ROUTES
 *  a login route using `passport.authenticate`
 *  a register route **not using passport**
 *
 */
router.route('/login').
  get(authCtrl.deny).
  post(authCtrl.login.post);

router.route('/logout').
  all(authCtrl.logout.all);

router.route('/changePassword').
  get(authCtrl.deny).
  patch(authCtrl.changePassword.patch);

router.route('/signup').
  get(authCtrl.deny).
  post(authCtrl.signup.post);

module.exports = router;
