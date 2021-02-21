const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let { notes } = require('../../data/db');
const { createNote, filterById } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;

    console.log('results from GET: ' + results);
    
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    const note = createNote(req.body, notes);
    res.json(note)
})

router.delete('/notes/:id', (req, res) => {
    const results = filterById(req.params.id, notes);
    res.json(results);
})

module.exports = router;