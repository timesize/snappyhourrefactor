var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || "mongodb://localhost/project-01");

module.exports.Location = require("./location.js");
module.exports.Deal = require("./deal.js");
