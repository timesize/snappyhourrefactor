var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//location schema
var DealSchema = new Schema({
  Day: String,
  timeBegin: Number,
  timeEnd: Number,
  price: Number
});

var Deal = mongoose.model('Deal', DealSchema);

module.exports = Deal;
