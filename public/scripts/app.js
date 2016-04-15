
/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/primary",
    success: sanitySuccess,
    error: sanityError
  });
  // make an ajax call to my server
  $('#colorQuery').on('submit', function clickHandler(){
  });

  // when a delete button for a location is clicked
    function handleDeleteLocation(e) {
      var locationId = $(this).parents('.primary').data('location-id');
      console.log('someone wants to delete location id=' + locationId );

      $.ajax({
    url: '/api/primary/' + locationId,
     method: 'DELETE',
    success: handleDeleteLocationSuccess
   });
 }

 // callback after DELETE /api/albums/:id
 function handleDeleteLocationSuccess(data) {
   var deletedLocationId = data._id;
  console.log('removing the following location from the page:', deletedLocationId);
   $('div[data-location-id=' + deletedLocationId + ']').remove();
  }




  
});

// these are being loaded when this app.js is executed
function sanitySuccess(success) {
  console.log("SUCCESS! it works!");
  console.log(success);
  var allPrimaries = success;
  // traverse all of my db entries and append each entry's favorite color to my #colorAnswer div
  allPrimaries.forEach( function(onePrimary) {
    renderPrimary(onePrimary);
    });

  function renderPrimary(onePrimary){
    var primaryHtml = $("#Deal-Place-Template").html();
    var primaryTemplate = Handlebars.compile(primaryHtml);
    var html = primaryTemplate(onePrimary);
    $("#placeOfDeal").prepend(html);
  }
}


function sanityError(error) {
  console.log("we have an error. uh oh");
  console.log(error);

}
