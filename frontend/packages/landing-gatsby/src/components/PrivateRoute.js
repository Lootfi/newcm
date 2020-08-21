import React from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import { AuthContext } from '../../../common/src/contexts/AuthContext';
import axios from 'common/src/axios';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = React.useState(undefined);

  React.useEffect(() => {
    checkAuth();
  }, []);

  let checkAuth = async () => {
    let result = await axios
      .get('auth/check', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
    console.log('RESULT', result);
    setAuth(result);
  };
  // typeof window !== 'undefined' &&
  // (!localStorage.getItem('user') || !localStorage.getItem('token'))
  if (auth == undefined) {
    return <h1>loading</h1>;
  }
  if (auth == false) {
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
