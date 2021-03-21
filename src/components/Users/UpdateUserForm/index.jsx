import {
  Button, Column, Control, Field, Help, Input, Label,
} from 'rbx';
import React, { useEffect, useState } from 'react';
import UsersService from '../../../services/users';

function UpdateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function initializeUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
    setEmail(user.email);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    UsersService.update({ name, email })
      .then(() => setStatus('Success'))
      .catch(() => setStatus('Error'));
  }

  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Column size={12}>
          <Field>
            <Label size="small">Name:</Label>
            <Control>
              <Input
                type="text"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Control>
          </Field>
          <Field>
            <Label size="small">Email:</Label>
            <Control>
              <Input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Control>
          </Field>
          <Field className="mt-5">
            <Control>
              <Button
                type="submit"
                color="primary"
              >
                Update
              </Button>
            </Control>
          </Field>
          {status === 'Error' && <Help color="danger">Something went wrong :(</Help>}
          {status === 'Success' && <Help color="success">User updated!</Help>}
        </Column>
      </form>
    </>
  );
}

export default UpdateUserForm;
