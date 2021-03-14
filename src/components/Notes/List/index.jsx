/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import moment from 'moment';
import {
  Button,
  Column, List, Title,
} from 'rbx';
import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

function NotesList({
  notes, currentNote, selectNote, createNote, deleteNote,
}) {
  return (
    <>
      <Column.Group breakpoint="mobile">
        <Column size={6}>
          <Title size={6} className="mt-1">
            { notes.length }
            {' '}
            Notes
          </Title>
        </Column>
        <Column size={6}>
          <Button
            size="small"
            color="success"
            className="is-pulled-right"
            onClick={createNote}
          >
            <FaPlus className="mr-2" />
            Note
          </Button>
        </Column>
      </Column.Group>
      <List as="ul" className="notes-list">
        { notes.map((note) => (
          <List.Item
            as="li"
            key={note._id}
            onClick={() => selectNote(note._id)}
            active={note == currentNote}
          >
            <Title size={6}>
              {
                note.title.replace(/(<([^>]+)>)/ig, '').length > 26
                  ? `${note.title.replace(/(<([^>]+)>)/ig, '').substring(0, 26)}...`
                  : note.title.replace(/(<([^>]+)>)/ig, '')
              }
            </Title>
            <Title size={6} subtitle spaced={false}>
              {
                note.body.replace(/(<([^>]+)>)/ig, '').length > 64
                  ? `${note.body.replace(/(<([^>]+)>)/ig, '').substring(0, 64)}...`
                  : note.body.replace(/(<([^>]+)>)/ig, '')
              }
            </Title>
            <Column.Group>
              <Column size={6}>
                <Button size="small" color="dark">
                  { moment(note.created_at).format('DD/MM/YYYY') }
                </Button>
              </Column>
              <Column size={6}>
                <Button
                  color="danger"
                  size="small"
                  onClick={() => deleteNote(note._id)}
                >
                  <FaTrash className="mr-2" />
                  Delete
                </Button>
              </Column>
            </Column.Group>
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default NotesList;
