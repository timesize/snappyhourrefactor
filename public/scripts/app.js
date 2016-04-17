
/* CLIENT-SIDE JS
  people can see this, be careful!

*/
//Reading info
  $.ajax({
    method: "GET",
    url: "/api/location",
    success: sanitySuccess,
    error: sanityError
  });
  // make an ajax call to my server
  $('#Snappy-Hour').on('submit', function clickHandler(event){
    event.preventDefault();
    var data = $('#Snappy-Hour').serialize();
    console.log(data, "Serizalized data");

//Posting aka creating info
   $.ajax({
    method: "POST",
    url: "/api/location",
    data: data,
    success: postSuccess,
    error: postError
  });
function postError(error){
console.log("Post error" , error);

}

function postSuccess(data) {
  console.log(data);
  $.ajax({
    method: "GET",
    url: "/api/location",
    success: sanitySuccess,
    error: sanityError
  });
}
  // when a delete button for a location is clicked
    function handleDeleteLocation(e) {
      var locationId = $(this).parents('.location').data('location-id');
      console.log('someone wants to delete location id=' + locationId );

      $.ajax({
    url: '/api/location/' + locationId,
     method: 'DELETE',
    success: handleDeleteLocationSuccess
   });
 }

 // callback after DELETE /api/location/:id
 function handleDeleteLocationSuccess(data) {
   var deletedLocationId = data._id;
  console.log('removing the following location from the page:', deletedLocationId);
   $('div[id=' + deletedLocationId + ']').remove();
  }





});

// these are being loaded when this app.js is executed
function sanitySuccess(success) {
  console.log("SUCCESS! it works!");
  console.log(success , "THIS IS DATA WE GET");
  var locationSuccess = success;
  // traverse all of my db entries and append each entry's favorite color to my #colorAnswer div
  locationSuccess.forEach( function(oneLocation) {
    renderPrimary(oneLocation);
    });

  function renderPrimary(oneLocation){
    var primaryHtml = $("#Deal-Place-Template").html();
    var primaryTemplate = Handlebars.compile(primaryHtml);
    var html = primaryTemplate(oneLocation);
    $("#placeOfDeal").prepend(html);
  }
}


function sanityError(error) {
  console.log("we have an error. uh oh");
  console.log(error);

}
