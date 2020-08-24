import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';

import Template from './template-app';
import Home from '../client/Home';
import NotFound from './404'
const App = () => {
  return (
    <Template>
      <Router basepath="/app">
      <NotFound default />
        <PrivateRoute path="/" component={Home} />
        {/* <Login path="/login" /> */}
      </Router>
    </Template>
  );
};

export default App;
