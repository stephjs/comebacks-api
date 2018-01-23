var mongoose = require('mongoose');  

// user model
var ComebackSchema = new mongoose.Schema({  
  comeback: String,
  rating: String
});

mongoose.model('Comeback', ComebackSchema);
module.exports = mongoose.model('Comeback');