/* eslint-disable react/prop-types */
import {
  Column, Control, Icon, Input,
} from 'rbx';
import { FaSearch, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

function NotesSearch({ searchNotes, fetchNotes }) {
  const [query, setQuery] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter') searchNotes(query);
  }
  return (
    <>
      <Column.Group className="is-vcentered" breakpoint="mobile">
        <Column size={10}>
          <Control iconRight>
            <Icon align="right" color="primary">
              <FaSearch />
            </Icon>
            <Input
              type="text"
              color="primary"
              placeholder="Type and hit Enter..."
              name={query}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Control>
        </Column>
        <Column size={1}>
          <a
            href="#"
            className="has-text-dark"
            onClick={() => {
              fetchNotes();
              setQuery('');
            }}
          >
            <FaTimes className="is-pulled-left" />
          </a>
        </Column>
      </Column.Group>
    </>
  );
}

export default NotesSearch;
