const fs = require("fs");
const path = require("path");

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

module.exports = createNote;