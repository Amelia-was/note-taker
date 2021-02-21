const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { readNotes, createNote, filterById } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = readNotes();
    
    res.json(results);
});

router.post('/notes', (req, res) => {
    let notes = readNotes();

    req.body.id = uuidv4();

    const note = createNote(req.body, notes);
    res.json(note)
})

router.delete('/notes/:id', (req, res) => {
    let notes = readNotes();

    const deletedNote = filterById(req.params.id, notes);
    res.json(deletedNote);
})

module.exports = router;