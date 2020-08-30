import React from 'react';
import SEO from '../../components/seo';
import Container from 'common/src/components/UI/Container';
import Footer from '../../containers/SaasClassic/Footer';

import { PasswordResetWrapper } from '../../styles/confidentiality.style';
import Template from '../template-app';
import BannerSection from '../../containers/SaasClassic/Banner';
import FoncSection from '../../containers/SaasClassic/Fonctionnement';
import Heading from 'common/src/components/Heading';
import axios from 'common/src/axios';
import Loader from 'common/src/components/Loader';

export default function PasswordReset() {
  const [state, setState] = React.useState({
    password: '',
    password_confirmation: ''
  });
  const [loading, setLoading] = React.useState(false);
  const errorsRef = React.useRef('');

  function changeValue(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function changePassword(e) {
    e.preventDefault();
    setLoading(true);

    if (state.password !== state.password_confirmation) {
      errorsRef.current.style.color = 'red';
      errorsRef.current.innerHTML =
        'La confirmation du mot de passe doit correspondre au mot de passe saisi.';
      setLoading(false);
      return;
    } else {
      errorsRef.current.innerHTML = '';
    }
    axios
      .post('password/reset', {
        ...state,
        token: new URLSearchParams(window.location.search).get('token'),
        email: new URLSearchParams(window.location.search).get('email')
      })
      .then((res) => {
        window.location = '/';
        setLoading(false);
      })
      .catch((err) => {
        errorsRef.current.style.color = 'red';
        errorsRef.current.innerHTML = err.response.data.error;
        if (err.response.data.errors)
          errorsRef.current.innerHTML = err.response.data.errors.password[0];
        setLoading(false);
      });
  }

  return (
    <Template>
      <SEO title={'Réinitialisation de mot de passe - ContactMajor'} />
      <PasswordResetWrapper>
        <Container>
          <Heading
            content="Réinitialisation de mot de passe"
            textAlign="center"
          />
          <div className="form-container">
            <label htmlFor="password">Votre Nouveau Mot de passe:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Nouveau Mot de passe"
              autoComplete="off"
              value={state.password}
              onChange={changeValue}
            />
            <label htmlFor="password">Confirmation:</label>
            <input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              placeholder="Confirmation"
              autoComplete="off"
              value={state.password_confirmation}
              onChange={changeValue}
            />
            <button
              onClick={changePassword}
              className="btn-red3"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Réinitialiser'}
            </button>
            <p ref={errorsRef}></p>
          </div>
        </Container>
      </PasswordResetWrapper>
      <Footer />
    </Template>
  );
}
