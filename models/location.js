var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Deals = require('./deal');
//location schema
var LocationSchema = new Schema({
  name: String,
  address: String,
  zipCode: String,
  deal: [Deals.schema]
});
//[Deal.schema]

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
