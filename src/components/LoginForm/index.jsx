import React, { Fragment, useState } from 'react';
import {
  Button, Field, Label, Control, Input, Column, Help,
} from 'rbx';
import { Redirect } from 'react-router-dom';
import UsersService from '../../services/users';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectTo, setRedirectTo] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await UsersService.login({ email, password });
      setRedirectTo('notes');
    } catch (err) {
      setError(true);
    }
  }

  if (redirectTo !== '') return <Redirect to={{ pathname: `/${redirectTo}` }} />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Column size={12}>
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
                      className="button is-light"
                      onClick={() => setRedirectTo('register')}
                    >
                      Register
                    </Button>
                    <Button
                      type="submit"
                      className="is-primary"
                    >
                      Login
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

export default LoginForm;
