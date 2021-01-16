var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    thumnail: String,
    actor: Array,
    director: Array,
    genre: Array,
    synopsis: String,
    rating: Number,
    url: String
})

module.exports = mongoose.model('Movie', MovieSchema);
