import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import classNames from 'classnames';
import { LightboxContext } from '../../contexts/LightboxContext';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../axios';
import Loader from '../Loader';
export default function ForgotPassword({
  btnStyle,
  titleStyle,
  outlineBtnStyle,
  descriptionStyle
}) {
  const [email, setEmail] = React.useState('');

  const errorsRef = React.useRef('');
  const { handleLightbox } = React.useContext(LightboxContext);
  const [loading, setLoading] = React.useState(false);

  let handleLoginChange = (e) => {
    setEmail(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    errorsRef.current.innerHTML = '';
    setLoading(true);
    if (!email) {
      errorsRef.current.style.color = 'red';
      errorsRef.current.innerHTML = 'Le champ E-mail est obligatoire.';
      setLoading(false);
    } else {
      axios
        .post('password/email', { email: email })
        .then((res) => {
          errorsRef.current.style.color = 'black';
          errorsRef.current.innerHTML = res.data.message;
          setLoading(false);
        })
        .catch((err) => {
          errorsRef.current.style.color = 'red';
          if (err.response.data.errors)
            errorsRef.current.innerHTML = err.response.data.errors.email[0];
          else if (err.response.data.error)
            errorsRef.current.innerHTML = err.response.data.error;
          setLoading(false);
        });
    }
  };
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
      <Heading content="Réinitialisation du mot de passe" {...titleStyle} />
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
            value={email}
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
            onClick={handleSubmit}
            className="default"
            title={loading ? <Loader /> : "Envoyer l'email"}
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
      </div>
    </div>
  );
}

ForgotPassword.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['22px !important', '25px !important', '25px !important'],
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
