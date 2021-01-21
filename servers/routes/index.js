const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/search/:movie', (req, res) => {
    const movie = req.params.movie;
    const regex = new RegExp(movie, 'i');
    Movie.find({title: {$regex: movie}}, function(err, movie) {
        if (err) return res.json(err);
        res.json({movie: movie})
    })
})

module.exports = router;
