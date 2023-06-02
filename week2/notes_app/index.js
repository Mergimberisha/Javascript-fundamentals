const NotesModel = require('./notesModel');
const NotesView = require('./notesView')
const notes = new NotesModel;
const notesView = new NotesView(notes);

console.log('The notes app is running');
console.log(notes.getNotes());