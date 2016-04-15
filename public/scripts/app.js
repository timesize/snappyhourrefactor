
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
