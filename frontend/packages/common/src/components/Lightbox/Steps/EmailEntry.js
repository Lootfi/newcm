import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';
import axios from 'common/src/axios';
import Loader from '../../Loader';

export default function EmailEntry({
  state,
  changeValue,
  loading,
  pageNum,
  setPageNum,
  setLoading,
  setState
}) {
  const errorsRef = React.useRef();

  function validateEmail(e) {
    setLoading(true);
    let page = pageNum;
    e.preventDefault();
    if (state.email == '') {
      errorsRef.current.style.color = 'red';
      errorsRef.current.innerHTML = 'Le champ E-mail est obligatoire';
      setLoading(false);
      return;
    }

    axios
      .post('validate-email', {
        email: state.email
      })
      .then((res) => {
        if (res.data.status === 'valid') {
          if (window.location.port === '') {
            window.fbq('trackCustom', 'Captif', {
              content: 'Email_donne_sur_ContactMajor'
            });
          }
          trackCustomEvent({
            category: 'funnel',
            action: 'step4_payment',
            label: 'Funnel - Etape 4 - Payment page'
          });

          setState({ ...state, emailValid: true });
          localStorage.setItem('email', res.data.email);
          setPageNum(3);
          // document.querySelector('.slide').style.marginLeft = '-42.84%';
        } else {
          setState({ ...state, emailValid: false });
          errorsRef.current.style.color = 'red';
          if (res.data.errors) {
            errorsRef.current.innerHTML = res.data.errors.email[0];
          } else {
            errorsRef.current.innerHTML = "L'email est invalid";
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log('ERROR', err);
        setLoading(false);

        setState({ ...state, emailValid: false });
      });
  }

  return (
    <div className={classNames('page', 'emailEntry')}>
      <div className="header-form" id="step-3-header"></div>

      <div className="field">
        <Fade right>
          <h3>Votre accès vous attend !</h3>
          <div className="emailPs">
            <p>Créez un compte pour commencer. </p>
            <p>Vous n'êtes qu'à une étape d'avoir accès.</p>
          </div>
          {/* <div className="sign-up-social">
                        <SocialButtons />
                        </div>
                        <hr className="hr-text" data-content="OR" /> */}
          <div className="form-container">
            <label htmlFor="email">Votre adresse e-mail :</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Votre adresse e-mail"
              autoComplete="off"
              value={state.email}
              onChange={changeValue}
            />
            <p style={{ width: '100%' }} ref={errorsRef}></p>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={(e) => validateEmail(e)}
            className="btn-red3"
            id="thirdNext"
          >
            {loading ? <Loader /> : 'Continuer'}
          </button>
        </Fade>
      </div>
    </div>
  );
}
