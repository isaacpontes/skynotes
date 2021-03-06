/* eslint-disable react/prop-types */
import { Button, Modal, Title } from 'rbx';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';

function DeleteUserModal({ isActive, toggleModal }) {
  const [redirectHome, setRedirectHome] = useState(false);

  async function deleteUser() {
    await UsersService.delete();
    setRedirectHome(true);
  }

  if (redirectHome) return <Redirect to={{ pathname: '/' }} />;

  return (
    <>
      <Modal active={isActive}>
        <Modal.Background onClick={() => toggleModal()} />
        <Modal.Content
          backgroundColor="white"
          className="p-5"
        >
          <Title size={4}>
            Attention! This action is irreversible!
          </Title>
          <Title size={6} subtitle>
            Are you sure you want to delete your account?
          </Title>
          <Button
            color="danger"
            outlined
            onClick={() => deleteUser()}
          >
            Yes, delete my account
          </Button>
        </Modal.Content>
        <Modal.Close onClick={() => toggleModal()} />
      </Modal>
    </>
  );
}

export default DeleteUserModal;
