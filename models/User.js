const mongoose = require('mongoose');
const { Schema } = mongoose;
// or const Schema = mongoose.Schema
// here we are using destructuring
// this is equivalent to saying mongoose.Schema;
// the object mongoose has a property Schema
// with destructing we're saying { Schema: Schema }
// meaning our key-value-pair Schema is the same as the mongoose one
// because it remains the same, we can just say {Schema}

//The destructuring assignment syntax is a
//JavaScript expression that makes it possible to unpack values
//from arrays, or properties from objects, into distinct variables.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const userSchema = new Schema({
  googleId: String
});

// mongo wants us to let it know what properties we will have
// you can add properties whenever you want

mongoose.model('users', userSchema);
// here we are loasding somthing in Mongo
