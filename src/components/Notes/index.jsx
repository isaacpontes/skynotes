/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Column } from 'rbx';
import React, { useEffect, useState } from 'react';
import { push as Sidebar } from 'react-burger-menu';
import NotesService from '../../services/notes';
import '../../styles/notes.scss';
import NotesEditor from './Editor';
import NotesList from './List';

function Notes({ isOpen, setIsOpen }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ _id: '', title: '', body: '' });

  async function fetchNotes() {
    const response = await NotesService.findAll();
    if (response.data.data.length >= 1) {
      setNotes(response.data.data.reverse());
      setCurrentNote(response.data.data[0]);
    } else {
      setNotes([]);
    }
  }

  async function createNote() {
    NotesService.create()
      .then(() => fetchNotes())
      .catch((error) => console.error(error));
  }

  async function updateNote(oldNote, params) {
    NotesService.update(oldNote._id, params)
      .then((updatedNote) => {
        console.log(updatedNote.data.data);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        console.log(newNotes);
        newNotes[index] = updatedNote.data.data;
        console.log(newNotes);
        setNotes(newNotes);
        console.log(notes);
        setCurrentNote(updatedNote.data.data);
      })
      .catch((error) => console.error(error));
  }

  async function deleteNote(noteId) {
    NotesService.delete(noteId)
      .then(() => fetchNotes())
      .catch((error) => console.error(error));
  }

  function selectNote(id) {
    const noteToSelect = notes.find((note) => note._id === id);
    setCurrentNote(noteToSelect);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Column.Group className="notes" id="notes">
        <Sidebar
          pageWrapId="notes-editor"
          isOpen={isOpen}
          onStateChange={(state) => setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId="notes"
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              Search...
            </Column>
          </Column.Group>

          <NotesList
            notes={notes}
            currentNote={currentNote}
            selectNote={selectNote}
            createNote={createNote}
            deleteNote={deleteNote}
          />

        </Sidebar>

        <Column size={12} className="notes-editor" id="notes-editor">
          <NotesEditor
            note={currentNote}
            updateNote={updateNote}
          />
        </Column>
      </Column.Group>
    </>
  );
}

export default Notes;
