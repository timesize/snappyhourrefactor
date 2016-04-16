var db = require("./models");

var Location = [{
  name: "Smokies ",
  address: "123 Pine St",
  zipCode: 94101,
  deal:"True"
},
{
  name: "Joshua Tree ",
  address: "Bush St",
  zipCode: 94101,
  deal:"True"
},
{
  name: "Blue Owl ",
  address: "2nd Ave",
  zipCode: 94101,
  deal: "True"
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
