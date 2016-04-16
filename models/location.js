var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var Deal = require('./deal.js');
//location schema
var LocationSchema = new Schema({
  name: String,
  address: String,
  zipCode: String,
  deal: String
});


var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
