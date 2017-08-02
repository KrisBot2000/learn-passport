const Users = require('./models/users');
// require packages

//preferred backend way to create a server
//express wants to be very slim (routing and middleware) and therefore includes no native way to do authentication -- add functionality by adding middleware
const express = require('express');

//bc receiving data from front-end
const bodyParser = require('body-parser');
//express's package for handling authentication
//middleware passport.js.org
const passport = require('passport');
//a "strategy" of passport that is baked in
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
//THEN need to npm install --save express body-parser passport passport-local express-session

// invoke express

// add middleware

// add routes
// app.get('/', (req, res) => {
//   res.send('smoke test');
// });

module.exports = app;

// custom authentication check middleware
