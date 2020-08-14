import React from 'react';
import { Router } from '@reach/router';
import {navigate} from 'gatsby';

const Route = ({ component: Component, ...rest }) => {
  return (
    <Router>
      <Component {...rest} />
    </Router>
  );
};

export default Route;
