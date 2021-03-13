import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Auth/Register';
import LoginScreen from './screens/Auth/Login';
import NotesScreen from './screens/Notes';
import UserScreen from './screens/Users';
import PrivateRoute from './components/PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRoute exact path="/notes" component={NotesScreen} />
        <PrivateRoute exact path="/users/edit" component={UserScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
