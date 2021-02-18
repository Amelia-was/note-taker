const router = require('express').Router();

const { notes } = require('../../data/db');

router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

module.exports = router;