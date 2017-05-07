var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

// global var
var port = 8888;

// mongoose
mongoose.connect( 'mongodb://localhost:27017/realestate');

//schema
var listingSchema = mongoose.Schema({
  cost: Number,
  rent: Number,
  sqft: Number,
  city: String
}); // end schema

// model
var listing = mongoose.model( 'listing', listingSchema );

//uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );


//spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); //end spin up server

//base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); //end base url get



app.get( '/listing', function( req, res ){
  listing.find().then( function( data ){
    res.send( data );
  }); // end find.then
}); //end get listings
