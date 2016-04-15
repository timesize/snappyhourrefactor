var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wdi/project-01");

module.exports.Primary = require("./primary.js");
module.exports.Secondary = require("./secondary.js");
