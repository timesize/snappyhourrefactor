var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Deal = require('./deal.js');
//location schema
var LocationSchema = new Schema({
  name: String,
  address: String,
  zipCode: String,
  // deal: [Deal.schema],
});
//[Deal.schema]

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
