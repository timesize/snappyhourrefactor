
/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$('#placeOfDeal').on('click', '.add-deal', handleNewDealClick);

$('#saveDeal').on('click', handleNewDealSubmit);

function handleNewDealClick(e){
  console.log('trying to add a deal');
  var thisLocationId = $(this).closest('.location').data('location-id');
  console.log('id:', thisLocationId);
  $('#dealModal').data('location-id', thisLocationId);
  $('#dealModal').modal();
}

function handleNewDealSubmit(event){
  event.preventDefault();
  var $modal = $('#dealModal');
  var $dealField = $modal.find('#locationDeal');

  var dataToPost = {
    deal: $dealField.val()
  };
  var locationId = $modal.data('locationId');
  console.log('received locationDeal: ', locationId, 'for location with id', locationId);

  var dealPostToServer = '/api/location/' + locationId + '/deal';
  $.post(dealPostToServer, dataToPost, function (data) {
    console.log('recieved data from post to /deal', data);
    //clear form
    $dealField.val('');

    //close modal
    $modal.modal('hide');
    $.get('/api/location/' + locationId, + function(data) {
      $('[data-location-id=' + locationId + ']').remove();
      renderPrimary(data);
    });
  }).error(function(err) {
    console.log('post to /api/location/:locationId/deals had an error', err);
  });

}



$('#placeOfDeal').on('click', '.delete-location', handleDeleteLocation);

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
// $("#placeOfDeal").on('click', '#updateButton', function(e){
//   $('#updateForm').css('display' , 'block');
//   console.log(e, "E");
//   $(".location-name").html("<input type='text' id='locationNameUpdated'>");
//   $(".location-address").html("<input type='text' id='locationAddressUpdated'>");
//   $(".location-zipCode").html("<input type='text' id='locationZipCodeUpdated'>");
//   $(".location-deal").html("<input type='text' id='locationDealUpdated'>");
//   $("#updateButton").html("<button type='btn btn-danger' class='saveChanges'> Save </button>");
// });
$("#placeOfDeal").on('click', '#updateForm', function(e){
  e.preventDefault();
  console.log(e, "E");
  var locationId = $(this).parents('.location').data('location-id');
  console.log('we are updating this location' + locationId);
  var name = $("#locationNameUpdated").val();
  var address = $("#locationAddressUpdated").val();
  var zipCode = $("#locationZipCodeUpdated").val();
  var deal = $("#locationDealUpdated").val();
  console.log(name);


  $.ajax({
    method: 'PUT',
    url: '/api/location/' + locationId,
    // data:{name: name, zipCode: zipCode, address: address},
    data: {
      name: name,
      zipCode: zipCode,
      address: address
    },
    success: renderNew,
    error: updateError
  });
});


function renderNew(data) {
  console.log("blh blah ", data);
  // location.reload();
}
function updateError(data) {
  console.log(data, "update error");
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
