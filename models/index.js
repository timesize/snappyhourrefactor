var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01");

module.exports.Location = require("./location.js");
module.exports.Deal = require("./deal.js");
