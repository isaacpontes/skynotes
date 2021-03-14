import React, { useState } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader';
import Notes from '../../components/Notes';

function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LoggedInHeader setIsOpen={setIsOpen} />
      <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default NotesScreen;
