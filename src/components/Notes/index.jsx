/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Column } from 'rbx';
import React, { useEffect, useState } from 'react';
import { push as Sidebar } from 'react-burger-menu';
import NotesService from '../../services/notes';
import '../../styles/notes.scss';
import NotesEditor from './Editor';
import NotesList from './List';
import NotesSearch from './Search';

function Notes({ isOpen, setIsOpen }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ _id: '', title: '', body: '' });

  async function fetchNotes() {
    const response = await NotesService.findAll();
    if (response.data.notes.length >= 1) {
      setNotes(response.data.notes.reverse());
      setCurrentNote(response.data.notes[0]);
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
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data.note;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data.note);
      })
      .catch((error) => console.error(error));
  }

  async function deleteNote(noteId) {
    NotesService.delete(noteId)
      .then(() => fetchNotes())
      .catch((error) => console.error(error));
  }

  async function searchNotes(query) {
    NotesService.search(query)
      .then((response) => setNotes(response.data.notes))
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
            <Column size={12}>
              <NotesSearch searchNotes={searchNotes} fetchNotes={fetchNotes} />
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
