/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={(props) => (
      localStorage.getItem('user')
        ? <Redirect to={{ pathname: '/notes' }} />
        : <Component {...props} />
    )}
  />
);

export default PublicRoute;
