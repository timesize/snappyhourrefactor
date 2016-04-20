var db = require("./models");

var Location = [{
  name: "Rickhouse ",
  address: "246 Kearny Street",
  zipCode: 94108,
  // deal:"true"
},
{
  name: "Murphy's Pub ",
  address: "217 Kearny Street",
  zipCode: 94101,
  // deal:"True"
},
{
  name: "The Irish Bank Bar ",
  address: "10 Mark Lane",
  zipCode: 94108,
  // deal: "True"
}

];

db.Location.remove({}, function(err, deletedPrimaries){

  db.Location.create( Location, function(err, successfulPrimary){
    if (err) { return console.log('ERROR', err); }

    console.log("We have success. See ->", successfulPrimary);
    process.exit();
  });
  console.log("All gone!");
});
