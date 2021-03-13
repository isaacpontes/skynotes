/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={(props) => (
      localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />
    )}
  />
);

export default PrivateRoute;
