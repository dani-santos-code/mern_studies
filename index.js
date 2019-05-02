//this is the entry point. like __init__.py

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // (30 days in miliseconds)
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//new instance of Google Strategy
// passport.use - I want you to be aware that there's a new strategy.
const PORT = process.env.PORT || 5000;
/* only works in production
 the or will say the default is 5000
 5000 will be in development */

app.listen(PORT);
