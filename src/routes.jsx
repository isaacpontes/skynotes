import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Auth/Register';
import LoginScreen from './screens/Auth/Login';
import NotesScreen from './screens/Notes';
import EditUserScreen from './screens/Users';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <PublicRoute exact path="/login" component={LoginScreen} />
        <PrivateRoute exact path="/notes" component={NotesScreen} />
        <PrivateRoute exact path="/user/edit" component={EditUserScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
