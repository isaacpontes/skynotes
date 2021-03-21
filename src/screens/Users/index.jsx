import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader';
import Users from '../../components/Users';

function EditUserScreen() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) return <Redirect to={{ pathname: '/notes' }} />;

  return (
    <>
      <LoggedInHeader setIsOpen={setIsOpen} />
      <Users />
    </>
  );
}

export default EditUserScreen;
