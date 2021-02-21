const fs = require("fs");
const path = require("path");

// const notes = require('../data/db.json');

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

    console.log(filtered);

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        // null means don't edit existing data, 2 creates whitespace between values
        JSON.stringify({ notes: filtered }, null, 2)
    );

    return filtered;
}

module.exports =  { createNote, filterById };