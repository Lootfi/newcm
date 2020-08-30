import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import classNames from 'classnames';
import { LightboxContext } from '../../contexts/LightboxContext';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../axios';
import Loader from '../Loader';
import ForgotPassword from './ForgotPassword';

export default function Connexion({
  btnStyle,
  titleStyle,
  outlineBtnStyle,
  descriptionStyle
}) {
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  });

  const errorsRef = React.useRef('');
  const { handleLightbox } = React.useContext(LightboxContext);
  const { loginUser } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [forgot, setForgot] = React.useState(false);

  let handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  let handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!login.email || !login.password) {
      errorsRef.current.style.color = 'red';
      errorsRef.current.innerHTML =
        'Les champs E-mail et Mot de passe sont requis';
      setLoading(false);
    } else {
      axios
        .post('login', { email: login.email, password: login.password })
        .then((res) => {
          setLoading(false);
          if (res.data.error) errorsRef.current.innerHTML = res.data.error;
          else loginUser(res.data.user, res.data.access_token);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  if (forgot) return <ForgotPassword />;
  else
    return (
      <div
        className={classNames('page', 'form-container', 'loginModal')}
        style={{
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Heading content="Connexion" {...titleStyle} />

        <div
          className="inputs"
          style={{
            width: '80%',
            textAlign: 'left'
          }}
        >
          <div>
            <label htmlFor="email">E-mail :</label>
            <input
              name="email"
              type="email"
              value={login.email}
              onChange={handleLoginChange}
            />
          </div>

          <div style={{ paddingTop: '15px' }}>
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleLoginChange}
            />
          </div>
        </div>
        <div
          className="buttons"
          style={{
            width: '80%'
          }}
        >
          <div>
            <Button
              type="submit"
              onClick={handleLogin}
              className="default"
              title={loading ? <Loader /> : 'CONNEXION'}
              {...btnStyle}
              style={{ backgroundColor: '#e63e3f' }}
            />
            <p style={{ width: '100%' }} ref={errorsRef}></p>
          </div>
          <br />
          <h4>
            Pas encore inscrit ?{' '}
            <u
              style={{ cursor: 'pointer' }}
              onClick={() => handleLightbox('signup')}
            >
              Cliquez ici
            </u>
          </h4>
          <Button
            title="Mot de passe oublié ?"
            variant="textButton"
            {...outlineBtnStyle}
            onClick={() => setForgot(true)}
          />
        </div>
      </div>
    );
}

Connexion.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px'
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px'
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    width: '100%'
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'gray'
  }
};
