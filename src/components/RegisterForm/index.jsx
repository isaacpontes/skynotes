import React, { Fragment, useState } from 'react';
import {
  Button, Field, Label, Control, Input, Column, Help,
} from 'rbx';
import { Redirect } from 'react-router-dom';
import UsersService from '../../services/users';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await UsersService.register({ name, email, password });
      setRedirectToLogin(true);
    } catch (err) {
      setError(true);
    }
  }

  if (redirectToLogin) return <Redirect to={{ pathname: '/login' }} />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Column size={12}>
          <Field>
            <Label size="small">Name:</Label>
            <Control>
              <Input
                type="name"
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
          <Field>
            <Label size="small">Password:</Label>
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
          <Field className="mt-5">
            <Control>
              <Column.Group breakpoint="mobile">
                <Column>
                  <Button.Group align="centered">
                    <Button
                      type="button"
                      className="button is-white has-text-custom-purple"
                      onClick={() => setRedirectToLogin(true)}
                    >
                      Login
                    </Button>
                    <Button
                      type="submit"
                      className="is-primary"
                      outlined
                    >
                      Register
                    </Button>
                  </Button.Group>
                </Column>
              </Column.Group>
            </Control>
          </Field>
          { error && <Help color="danger">Invalid email or password.</Help> }
        </Column>
      </form>
    </>
  );
}

export default RegisterForm;
