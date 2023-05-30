const NotesModel = require('./notesModel');

describe("NotesModel", () => {
    it ("#getNotes returns a empty array", ()=> {
        const notes = new NotesModel;
        expect(notes.getNotes()).toEqual([]);
    })

    it('#addNotes adds new notes to the array', () => {
        const notes = new NotesModel;

        notes.addNotes('Go to the shops');
        notes.addNotes('Buy milk');
        
        expect(notes.getNotes()).toEqual(['Go to the shops', 'Buy milk']);
    })

    it('#reset deletes all notes from the array', () => {
        const notes = new NotesModel;

        notes.addNotes('Go to the shops');
        notes.addNotes('Buy milk');
        notes.reset();

        expect(notes.getNotes()).toEqual([]);
    })
})