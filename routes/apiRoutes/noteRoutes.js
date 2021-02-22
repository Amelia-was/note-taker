const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { readNotes, createNote, filterById } = require('../../lib/notes');

// get all notes from db.json
router.get('/notes', (req, res) => {
    let results = readNotes();
    
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
});

// to add notes to db.json
router.post('/notes', (req, res) => {
    let notes = readNotes();

    req.body.id = uuidv4();

    const note = createNote(req.body, notes);

    if (note) {
        res.json(note);
    } else {
        res.send(404);
    }
})

// to delete note from db.json
router.delete('/notes/:id', (req, res) => {
    let notes = readNotes();

    const message = filterById(req.params.id, notes);

    if (message) {
        res.send('Note deleted!');
    } else {
        res.send(404);
    }
})

module.exports = router;