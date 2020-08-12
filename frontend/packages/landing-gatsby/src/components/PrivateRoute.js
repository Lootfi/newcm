import { Router, navigate } from '@reach/router';
import { AuthContext } from '../../../common/src/contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin } = React.useContext(AuthContext);
  if (isLoggedin == undefined) {
    return <h1>loading...</h1>;
  } else if (!isLoggedin) {
    navigate(`/`); //redirect home
    return null;
  } else
    return (
      <Router>
        <Component {...rest} />
      </Router>
    );
};

export default PrivateRoute;
