var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//location schema
var DealSchema = new Schema({
  // Day: String,
  // timeBegin: Number,
  // timeEnd: Number,
  deal: String,
});

var Deal = mongoose.model('Deal', DealSchema);

module.exports = Deal;
