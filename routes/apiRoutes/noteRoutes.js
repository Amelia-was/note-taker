const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { notes } = require('../../data/db');
const { createNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    const note = createNote(req.body, notes);
    res.json(note)
})

module.exports = router;