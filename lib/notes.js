const fs = require("fs");
const path = require("path");

const readNotes = function () {
    let data = fs.readFileSync(path.join(__dirname, '../data/db.json'));
    let json = JSON.parse(data);
    let notes = json.notes;

    return notes;
}

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

function filterById(id, notesArray) {
    const filtered = notesArray.filter(note => note.id !== id);
    const deletedNote = notesArray.filter(note => note.id === id)[0];

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        // null means don't edit existing data, 2 creates whitespace between values
        JSON.stringify({ notes: filtered }, null, 2)
    );

    return deletedNote;
}

module.exports =  { readNotes, createNote, filterById };