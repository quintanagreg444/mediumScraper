var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//using Schema constructor, create a new UserSchema object 
//This is similar t a Sequilze Model 
var clipSchema = mongoose.Schema({

 title: {
  type:String,
  required: true

 },
 // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note

  note: {
   type: Schema.Types.ObjectId,

  }



})