const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({username:'GGO DONG'}));

router.get('/search/:movie', (req, res) => {
    console.log(req.params.movie);
})

router.get('/group', (req, res)=>res.json({username: 'dev group. GGO DONG'}));

module.exports = router;
