var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    thumnail: String,
    actors: Array,
    directors: Array,
    genres: Array,
    synopsis: String,
    rating: Number,
    url: String
})

module.exports = mongoose.model('Movie', MovieSchema);
