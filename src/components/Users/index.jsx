import React, { useState } from 'react';
import {
  Button,
  Card, Column, Container, Section, Title,
} from 'rbx';
import UpdateUserForm from './UpdateUserForm';
import UpdatePasswordForm from './UpdatePasswordForm';
import DeleteUserModal from './DeleteUserModal';
import '../../styles/users.scss';

function Users() {
  const [modalIsActive, setModalIsActive] = useState(false);

  function toggleModal() {
    setModalIsActive(!modalIsActive);
  }

  return (
    <>
      <Section size="small" className="users has-background-light" id="notes">
        <Container id="notes-editor">
          <Column.Group centered className="users-edit">
            <Column size={3}>
              <Title size={5} className="mt-2 has-text-grey has-text-left">
                Personal Information
              </Title>
            </Column>
            <Column size={4}>
              <Card>
                <Card.Content>
                  <UpdateUserForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>

          <hr />

          <Column.Group centered className="users-edit">
            <Column size={3}>
              <Title size={5} className="mt-2 has-text-grey has-text-left">
                Update Password
              </Title>
            </Column>
            <Column size={4}>
              <Card>
                <Card.Content>
                  <UpdatePasswordForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>

          <hr />

          <Column.Group centered>
            <Column size={3}>
              <Title size={5} className="mt-2 has-text-grey has-text-left">
                Delete Account
              </Title>
            </Column>
            <Column size={4}>
              <Card>
                <Card.Content>
                  <Button
                    color="danger"
                    onClick={() => toggleModal()}
                  >
                    Delete Account
                  </Button>
                </Card.Content>
              </Card>
              <DeleteUserModal isActive={modalIsActive} toggleModal={toggleModal} />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  );
}

export default Users;
