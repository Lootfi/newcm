import React from 'react';
import Text from '../Text';
import Heading from '../Heading';
import Button from '../Button';
import LoginModalWrapper from './loginModal.style';
import LightboxWrapper from './Lightbox.style';

/*
 * MY IMPORTS
 */

import Loader from '../Loader';
import classNames from 'classnames';
import axios from '../../axios';

import Payment from './Payment';
import SocialButtons from './SocialButtons';
import { LightboxContext } from '../../contexts/LightboxContext';
import Connexion from './Connexion';

import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Fade from 'react-reveal/Fade';

import Modal from 'react-modal';
import SetupProfile from './SetupProfile';
import EmailEntry from './Steps/EmailEntry';

Modal.setAppElement('#___gatsby');

const Lightbox = React.memo(() => {
  /*
   *
   *   MY CODE
   *
   *
   */
  const {
    login: existant,
    handleOpenModal,
    handleCloseModal,
    afterOpenModal,
    open
  } = React.useContext(LightboxContext);
  const [pageNum, setPageNum] = React.useState(0);
  const [state, setState] = React.useState({
    email: '',
    name: '',
    ccNumber: '',
    password: '',
    emailValid: null
  });
  const [price, setPrice] = React.useState(0);

  const [loading, setLoading] = React.useState(false);
  var spanEmail, spanCc, spanName, spanPassword;
  if (typeof window !== 'undefined') {
    spanEmail = document.getElementById('email-span');
    spanCc = document.getElementById('cc-number-span');
    spanName = document.getElementById('name-span');
    spanPassword = document.getElementById('password-span');
  }

  React.useEffect(() => {
    axios.get('price').then((res) => {
      setPrice(res.data);
    });
    if (localStorage.getItem('email')) setPageNum(3);
  }, []);

  let changeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // function checkEmail(email) {
  //    dispatch({ type: 'VALIDATE_EMAIL', payload: email });
  // }

  function nextPage(e) {
    let page = pageNum;
    e.preventDefault();
    if (page === 0) {
      trackCustomEvent({
        category: 'funnel',
        action: 'step2_message2',
        label: 'Funnel - Etape 2 - Message 2'
      });
      // document.querySelector('.slide').style.marginLeft = '-14.28%';
      setPageNum(1);
    }
    if (page === 1) {
      trackCustomEvent({
        category: 'funnel',
        action: 'step3_email',
        label: 'Funnel - Etape 3 - Email page'
      });
      // document.querySelector('.slide').style.marginLeft = '-28.56%';
      setPageNum(2);
    }

    if (page === 3) {
      if (state.ccNumber === '') {
        spanCc.className = 'error-message show';
        spanCc.innerText = 'Please, enter a valid credit card number';
        return;
      } else if (state.ccNumber.length < 11) {
        spanCc.className = 'error-message show';
        spanCc.innerText = 'Please, enter a valid credit card number';
        return;
      } else {
        spanCc.className = 'error-message';
        // document.querySelector('.slide').style.marginLeft = '-57.15%';
        setPageNum(4);
      }
    }

    if (page === 4) {
      if (state.name === '') {
        spanName.className = 'error-message show';
        spanName.innerText = 'Please, enter a valid name';
      } else {
        spanName.className = 'error-message';
      }

      if (state.password === '') {
        spanPassword.className = 'error-message show';
        spanPassword.innerText = 'Please, enter a valid password';
      } else if (state.password.length < 6) {
        spanPassword.className = 'error-message show';
        spanPassword.innerText =
          'Please, enter a valid password (at least six characters)';
      } else {
        spanPassword.className = 'error-message';
        // document.querySelector('.slide').style.marginLeft = '-71.43%';
        setPageNum(5);
      }
    }

    if (page === 5) {
      // document.querySelector('.slide').style.marginLeft = '-85.70%';
      setPageNum(6);
    }
  }

  /*
   *
   *    END OF MY CODE
   *
   *
   */
  return (
    <Modal
      className="Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.58)',
          zIndex: '9999'
        },
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          // maxWidth: '960px',
          width: '400px',
          height: '100%',
          margin: '0 auto',
          padding: 0,
          border: 0,
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center'
        }
      }}
      isOpen={open}
    >
      <LoginModalWrapper>
        <LightboxWrapper>
          {/* MY JSX */}
          {/* 
              

              
              */}

          <Button
            className="modalCloseBtn"
            variant="fab"
            onClick={() => handleCloseModal()}
            icon={<i className="flaticon-plus-symbol" />}
          />
          {existant === 'signup' && (
            <div className="container" id="container">
              <div className="form-outer">
                <form action="">
                  {/* SLIDES BEGIN */}
                  {/*  */}

                  {/*  */}
                  {/* INTRO SLIDE */}
                  {/*  */}

                  {pageNum === 0 && (
                    <div className={classNames('page', 'slide', 'intro')}>
                      <div className="header-form" id="step-1-header"></div>

                      <div className="field">
                        <Heading
                          as="h3"
                          content="Prêt pour avoir les bons contacts ?"
                        />
                        <Text content="Accès à vie pour l'ensemble de la base de ContactMajor de plus de 3.200 contacts influents dans la musique. Aucune limite, aucune contrainte." />
                        <div className="slider-dots">
                          <div className={classNames('slider', 'open')}></div>
                          <div className="slider"></div>
                        </div>
                        <button
                          type="button"
                          onClick={nextPage}
                          className="btn"
                          id="firstNext"
                        >
                          Suivant
                        </button>
                      </div>
                    </div>
                  )}

                  {/*  */}
                  {/* INTRO SLIDE 2 */}
                  {/*  */}

                  {pageNum == 1 && (
                    <div className={classNames('page', 'intro')}>
                      <div className="header-form" id="step-2-header"></div>

                      <div className="field">
                        <Fade right>
                          <h3>Amener votre carrière à un autre niveau ?</h3>
                          <p>
                            Parce que votre carrière dure dans le temps, votre
                            accès durera à vie. Vous aurez toujours accès a tous
                            les contacts musicaux et contacts médias sans aucune
                            limite dans le temps.
                          </p>
                          <div className="slider-dots">
                            <div className="slider"></div>
                            <div className={classNames('slider', 'open')}></div>
                          </div>
                          <button
                            type="button"
                            onClick={nextPage}
                            className="btn"
                            id="secondNext"
                          >
                            Suivant
                          </button>
                        </Fade>
                      </div>
                    </div>
                  )}

                  {/*  */}
                  {/* SIGNUP SLIDE */}
                  {/*  */}

                  {pageNum == 2 && (
                    <EmailEntry
                      state={state}
                      changeValue={changeValue}
                      loading={loading}
                      pageNum={pageNum}
                      setPageNum={setPageNum}
                      setLoading={setLoading}
                      setState={setState}
                    />
                  )}

                  {/*  */}
                  {/* PAYMENT SLIDE */}
                  {/*  */}

                  {pageNum == 3 && (
                    <Payment
                      ccNumber={state.ccNumber}
                      setPageNum={setPageNum}
                      price={price}
                      setPrice={setPrice}
                    />
                  )}

                  {/*  */}
                  {/* PAYMENT DONE SLIDE */}
                  {/*  */}

                  {pageNum == 4 && (
                    <SetupProfile
                      state={state}
                      changeValue={changeValue}
                      price={price}
                    />
                  )}

                  {/*  */}
                  {/* SLIDES END */}
                  {/*  */}
                </form>
              </div>
            </div>
          )}

          {existant === 'connexion' && (
            <div
              style={{
                height: '100%',
                background: 'transparent'
              }}
              className={classNames('container', 'loginContainer')}
              id="container"
            >
              <div style={{ height: '400px', width: '100%' }}>
                <Connexion />
              </div>
            </div>
          )}

          {/* 
              

              */}
          {/* END OF MY JSX */}
        </LightboxWrapper>
      </LoginModalWrapper>
    </Modal>
  );
});

export default Lightbox;
