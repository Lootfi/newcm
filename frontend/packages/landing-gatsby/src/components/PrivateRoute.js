import React from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import { AuthContext } from '../../../common/src/contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin, checkAuth } = React.useContext(AuthContext);
  if (
    typeof window !== 'undefined' &&
    (!localStorage.getItem('user') || !localStorage.getItem('token'))
  ) {
    // make it async
    navigate('/'); //redirect to static page
    return null;
  } else
    return (
      <Router>
        <Component {...rest} />
      </Router>
    );
};

export default PrivateRoute;
