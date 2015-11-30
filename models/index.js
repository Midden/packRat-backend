//jshint node:true

'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));

mongoose.connect("mongodb://localhost/passport-lesson");

module.exports = mongoose;


// // passport
// require('dotenv').load();
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize(process.env.SQL_DB,
//   process.env.SQL_USER,
//   process.env.SQL_PASS, {
//     dialect : 'postgres',
//     unixSocket : process.env.SQL_SOCK//,
// //    hostname : process.env.SQL_HOST,
// //    port : process.env.SQL_PORT
//   });

// var models = {
//   'sequelize' : sequelize,
//   User : sequelize.import('./User')
// };

// module.exports = models;
