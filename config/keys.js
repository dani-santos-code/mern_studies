// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV == 'production') {
  // this is automatically generated on Heroku
  //we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!
  // this is the local machine case
  module.exports = require('./dev');
}
