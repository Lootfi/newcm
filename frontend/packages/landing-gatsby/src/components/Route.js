import React from 'react';
import { Router, navigate } from '@reach/router';

const Route = ({ component: Component, ...rest }) => {
  return (
    <Router>
      <Component {...rest} />
    </Router>
  );
};

export default Route;
