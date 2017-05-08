$( document ).ready( function (){
  console.log('jq');
  getListings();

});

function getListings(){
  console.log( 'in get listings' );
  $.ajax({
    url: '/listing',
    type: 'GET',
    success: function( response ){
      console.log( 'back from server with:', response );
      updateDom( response );
    } //end success
  }); // end ajax
} //end get listings

var updateDom = function( listings ){
  var outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  for (var i = 0; i < listings.length; i++) {
    console.log( 'appending:', listings[i] );
    if (listings[i].hasOwnProperty("cost")) {
      outputDiv.append( '<div class="col-sm-3 card"><h2><strong> For Sale </strong></h2><h3> Cost: $' + listings[i].cost +'</h3><p> Sqft : '+ listings[i].sqft + 'ft.</p><p> City : '+ listings[i].city + '</p></div>');
    } else {
      outputDiv.append( '<div class="col-sm-3 card"><h2><strong> For Rent </strong></h2><h3>  Rent: $' + listings[i].rent +'</h3><p> Sqft : '+ listings[i].sqft + 'ft.</p><p> City : '+ listings[i].city + '</p></div>');
    }
  }
};
