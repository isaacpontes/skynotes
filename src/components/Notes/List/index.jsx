/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import moment from 'moment';
import {
  Column, List, Tag, Title,
} from 'rbx';
import React from 'react';

function NotesList({ notes, currentNote, selectNote }) {
  return (
    <>
      <Column.Group breakpoint="mobile">
        <Column size={6} offset="1">
          <Title size={6}>
            { notes.length }
            {' '}
            Notes
          </Title>
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
            <Tag color="dark" className="is-pulled-right">
              { moment(note.created_at).format('DD/MM') }
            </Tag>
            <Title size={6}>
              {
                note.title.replace(/(<([^>]+)>)/ig, '').length > 16
                  ? `${note.title.replace(/(<([^>]+)>)/ig, '').substring(0, 16)}...`
                  : note.title.replace(/(<([^>]+)>)/ig, '')
              }
            </Title>
            <Title size={6} subtitle spaced={false}>
              {
                note.body.replace(/(<([^>]+)>)/ig, '').length > 48
                  ? `${note.body.replace(/(<([^>]+)>)/ig, '').substring(0, 48)}...`
                  : note.body.replace(/(<([^>]+)>)/ig, '')
              }
            </Title>
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default NotesList;
