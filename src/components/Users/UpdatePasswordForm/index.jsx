import {
  Button, Column, Control, Field, Help, Input, Label,
} from 'rbx';
import React, { useState } from 'react';
import UsersService from '../../../services/users';

function UpdatePasswordForm() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    if (password !== passwordConfirmation) {
      setStatus('Invalid');
    } else {
      UsersService.updatePassword({ password })
        .then(() => {
          setStatus('Success');
          setPassword('');
          setPasswordConfirmation('');
        })
        .catch(() => {
          setStatus('Error');
          setPassword('');
          setPasswordConfirmation('');
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Column size={12}>
          <Field>
            <Label size="small">New Password:</Label>
            <Control>
              <Input
                type="password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Control>
          </Field>
          <Field>
            <Label size="small">Confirm New Password:</Label>
            <Control>
              <Input
                type="password"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
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
          {status === 'Invalid' && <Help color="danger">The passwords do not match</Help>}
          {status === 'Error' && <Help color="danger">Something went wrong :(</Help>}
          {status === 'Success' && <Help color="success">Password updated!</Help>}
        </Column>
      </form>
    </>
  );
}

export default UpdatePasswordForm;
