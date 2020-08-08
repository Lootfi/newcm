import { Router, navigate } from '@reach/router';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/`);
    return null;
  }

  return (
    <Router>
      <Component {...rest} />
    </Router>
  );
};

export default PrivateRoute;
