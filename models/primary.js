var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Deal = require('./secondary.js');
//location schema
var LocationSchema = new Schema({
  name: String,
  address: String,
  zipCode: Number,
  deal: Boolean
});


var Location = mongoose.model('location', LocationSchema);

module.exports = Location;
