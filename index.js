const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy({
    // clientID: process.env['GOOGLE_CLIENT_ID'],
    // clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    // scope: 'profile'
}));
//new instance of Google Strategy
// passport.use - I want you to be aware that there's a new strategy.

const PORT = process.env.PORT || 5000
/* only works in production
 the or will say the default is 5000
 5000 will be in development */

app.listen(PORT);