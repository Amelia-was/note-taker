const fs = require("fs");
const path = require("path");

// read current contets of db.json
const readNotes = function () {
    let data = fs.readFileSync(path.join(__dirname, '../data/db.json'));
    let json = JSON.parse(data);
    let notes = json.notes;

    return notes;
}

// create new note and write to db.json
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        // null means don't edit existing data, 2 creates whitespace between values
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

// remove note with specified id
function filterById(id, notesArray) {
    let message;
    const filtered = notesArray.filter(note => note.id !== id);
    
    if (filtered.length < notesArray.length) {
        message = ('Note deleted!')
    }

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        // null means don't edit existing data, 2 creates whitespace between values
        JSON.stringify({ notes: filtered }, null, 2)
    );

    return message;
}

module.exports =  { readNotes, createNote, filterById };