// const { notDeepStrictEqual } = require('assert');
// const fs = require('fs');
// const util = require('util');
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Storage {
//     read(note){
//         return readFileAsync("db/db.json", "utf8")
//         .then((data) => {
//             let allNotes = JSON.parse(data);
      
//             const notesAfterDelete = allNotes.filter((note) => note.id !== id);
      
//     }
//     write(note){
//         return writeFileAsync("db/db.json", JSON.stringify(note))
//     }
//     getNotes(){
//         return this.read().then(notes => {
//             let parseNotes = [].concat(JSON.parse(notes))
//             return parseNotes
//         })
//     }
//     saveNote(){

//     }
//     deleteNote(){

//     }

// } 