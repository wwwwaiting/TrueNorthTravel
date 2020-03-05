var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    name: String,
    address: String,
    comment: String
});

module.exports = mongoose.model('Comment',CommentSchema);
