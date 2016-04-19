
/* CLIENT-SIDE JS
  people can see this, be careful!

*/
$('#placeOfDeal').on('click', '.deleteLocation', handleDeleteLocation);

function handleDeleteLocation(){
  var locationId = $(this).parents('.location').data('location-id');
  console.log('we are deleting this location' + locationId);
  $.ajax({
    method: 'DELETE',
    url: '/api/location/' + locationId,
    success: handleDeleteLocationSuccess,
    error: errorDelete
  });
}

function handleDeleteLocationSuccess(data){
  var deletedLocationId = data._id;
  console.log('the following location is being deleted: ', deletedLocationId);
  $('[data-location-id=' + deletedLocationId + ']').remove();
}

function errorDelete(err){
  console.log('error has occurred in deleting: ', err);
}

//UPDATING right here
$("#placeOfDeal").on('click', '#updateButton', function(e){
  console.log(e, "E");
  $(".location-name").html("<input type='text' id='locationNameUpdated'>");
  $(".location-address").html("<input type='text' id='locationAddressUpdated'>");
  $(".location-zipCode").html("<input type='text' id='locationZipCodeUpdated'>");
  $(".location-deal").html("<input type='text' id='locationDealUpdated'>");
  $("#updateButton").html("<button type='btn btn-danger' class='saveChanges'> Save </button>");
});
$("#placeOfDeal").on('click', '#saveChanges', function(e){
  console.log(e, "E");
  var tempId = $('.deleteButton').data('location-id');
  var name = $("#locationNameUpdated").val();
  var address = $("#locationAddressUpdated").val();
  var zipCode = $("#locationZipCodeUpdated").val();
  var deal = $("#locationDealUpdated").val();
  console.log(name, address, zipCode);
  console.log(tempId);
  $.ajax({
    method: 'PUT',
    url: '/api/location/' + tempId,
    data:{name:name, zipCode: zipCode, address:address},
    success: renderNew,
    error: updateError
  });
});


function renderNew(data) {
  console.log(data);
}
function updateError(data) {
  console.log(data);
}
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
