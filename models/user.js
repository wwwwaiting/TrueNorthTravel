var mongoose = require('mongoose');

var favSchema = new mongoose.Schema({
	name: String,
  address: String,
  rate: Number,
  img: String,
})
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pwd: String,
    favs:[favSchema]
});

module.exports = mongoose.model('User',UserSchema);
