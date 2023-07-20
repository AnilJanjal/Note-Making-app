// Get elements
const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const noteList = document.getElementById('note-list');
let noteCounter = 1;

// Add event listener to addButton
addButton.addEventListener('click', addNote);

// Function to add a new note
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const noteItem = document.createElement('li');
    noteItem.className = 'note-item';

    const noteTextElement = document.createElement('span');
    noteTextElement.innerText = 'Note ' + noteCounter + ': ' + noteText;
    noteCounter++;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteNote);

    noteItem.appendChild(noteTextElement);
    noteItem.appendChild(deleteButton);

    noteList.appendChild(noteItem);
    noteInput.value = '';

    // Save the note
    saveNoteToFile(noteText);
  }
}

// Function to delete a note
function deleteNote() {
  const noteItem = this.parentElement;
  const noteText = noteItem.firstChild.innerText;

  // Remove the note from the note list
  noteList.removeChild(noteItem);

  // Delete the note from the file
  deleteNoteFromFile(noteText);
}

// Function to save a note to a file
function saveNoteToFile(noteText) {
  // Simulated code to save the note to a file
  console.log('Note saved:', noteText);
}

// Function to delete a note from the file
function deleteNoteFromFile(noteText) {
  // Simulated code to delete the note from the file
  console.log('Note deleted:', noteText);
}

// Initialize the note list on page load
initializeNoteList();

// Function to initialize the note list from saved files
function initializeNoteList() {
  // Simulated code to retrieve the saved notes from files
  const savedNotes = retrieveSavedNotes();
  savedNotes.forEach(noteText => {
    createNoteElement(noteText);
  });
}

// Function to create a note element
function createNoteElement(noteText) {
  const noteItem = document.createElement('li');
  noteItem.className = 'note-item';
  const noteTextElement = document.createElement('span');
  noteTextElement.innerText = noteText;
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteNote);
  noteItem.appendChild(noteTextElement);
  noteItem.appendChild(deleteButton);
  noteList.appendChild(noteItem);
}

