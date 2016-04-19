// SERVER-SIDE JAVASCRIPT

var express = require('express'),
    db = require('./models'),
    app = express();


// serve static files from public folder
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

/**********
 * ROUTES *
 **********/

/*
 * HTML ENDPOINTS
 */

app.get('/', function homepage(req, res) {
  console.log('hello');
  res.sendFile(__dirname + '/views/index.html');
});




// TODO: Make 'api/sanity' endpoint!

/*
 * API ENDPOINTS
 */
/* GET ALL Primary DB Entries */
app.get('/api/location', function sanity(req, res) {

  db.Location.find( {}, function getAllPrimaries(err, allPrimaries){
    if (err) { return console.log('ERROR', err); }
    console.log(allPrimaries);
    res.json(allPrimaries);
  });

});


// POST //
app.post('/api/location', function (req, res){
console.log(req.body);
  var newLocation = new db.Location({
    name: req.body.place,
    address: req.body.address,
    zipCode: req.body.zipCode,
    deal: req.body.deal
  });
  newLocation.save(function (err, savedLocation){
    if (!err) {
      res.json(savedLocation);
    } else {
      console.log("Couldn't save new data", err);
    }
  });
});
// END OF POST  //

// DELETE //

app.delete('/api/location/:locationId', function(req, res){
  db.Location.findOneAndRemove({_id: req.params.locationId}, function(err, foundLocation) {
    res.json(foundLocation);
  });
});

//update
app.put('/api/location/:locationId', function(req, res){
  db.Location.findOne({_id: req.params.locationId}, function(err, foundLocation) {
    res.json(foundLocation);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
