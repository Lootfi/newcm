import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from '../Box';
import Text from '../Text';
import Heading from '../Heading';
import Input from '../Input';
import CheckBox from '../Checkbox/index';
import Button from '../Button';
import Image from '../Image';
import LoginModalWrapper from './loginModal.style';
import LightboxWrapper from './Lightbox.style';
import 'rc-tabs/assets/index.css';
import LogoImage from '../../../../common/src/assets/image/1.png';
import LoginImage from '../../../../common/src/assets/image/1.png';
import GoogleLogo from '../../../../common/src/assets/image/1.png';
/*
 * MY IMPORTS
 */

import Loader from '../Loader';
import classNames from 'classnames';
import axios from '../../axios';

import GLogo from '../../assets/image/g-logo.png';
import FLogo from '../../assets/image/f-logo.png';
import Payment from './Payment';
import SocialButtons from './SocialButtons';
import { LightboxContext } from '../../contexts/LightboxContext';
import Connexion from './Connexion';

import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const Lightbox = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle
}) => {
  /*
   *
   *   MY CODE
   *
   *
   */
  const { login: existant } = React.useContext(LightboxContext);
  const [pageNum, setPageNum] = React.useState(0);
  const [state, setState] = React.useState({
    email: '',
    name: '',
    ccNumber: '',
    password: '',
    emailValid: null
  });

  const [loading, setLoading] = React.useState(false);

  const spanEmail = document.getElementById('email-span');
  const spanCc = document.getElementById('cc-number-span');
  const spanName = document.getElementById('name-span');
  const spanPassword = document.getElementById('password-span');

  React.useEffect(() => {
    if (localStorage.getItem('email')) setPageNum(3);
  }, []);

  // React.useEffect(() => {
  //   if (state.email === '' && state.emailValid === false) {
  //     if (spanEmail) {
  //       spanEmail.className = 'error-message show';
  //       spanEmail.innerText = 'Enter a valid email address';
  //     }
  //   } else if (state.emailValid === false) {
  //     console.log('error');
  //     spanEmail.className = 'error-message show';
  //     spanEmail.innerText = 'Please, enter a valid email address';
  //   } else if (state.emailValid === true) {
  //     // document.querySelector('.slide').style.marginLeft = '-42.84%';
  //   }
  // }, [state.emailValid]);

  let changeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // function checkEmail(email) {
  //    dispatch({ type: 'VALIDATE_EMAIL', payload: email });
  // }

  function validateEmail(e) {
    let page = pageNum;
    e.preventDefault();
    setLoading(true);
    axios
      .post('validate-email', {
        email: state.email
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 'valid') {
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
          if (res.data.errors) {
            document.getElementById('email-span').style.display = 'block';
            document.getElementById('email-span').className =
              'error-message show';
            document.getElementById('email-span').innerText =
              res.data.errors.email[0];
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

  function setUpProfile() {
    axios
      .post('setup-profile', {
        name: state.name,
        password: state.password,
        email: localStorage.getItem('email')
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem('email');
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('email');
      });
  }

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
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle} />
      <Button
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="REGISTER" {...btnStyle} />
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <LightboxWrapper>
        <Box className="row" {...row}>
          <Box className="col tabCol" {...col}>
            <Box {...contentWrapper}>
              {/* MY JSX */}
              {/* 
              

              
              */}
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
                          <div className="header-form"></div>

                          <div className="field">
                            <Heading
                              as="h3"
                              content="Prêt pour avoir les bons contacts ?"
                            />
                            <Text content="Accès à vie pour l'ensemble de la base de ContactMajor de plus de 3.200 contacts influents dans la musique. Aucune limite, aucune contrainte." />
                            <div className="slider-dots">
                              <div
                                className={classNames('slider', 'open')}
                              ></div>
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
                          <div className="header-form"></div>

                          <div className="field">
                            <h3>Amener votre carrière à un autre niveau ?</h3>
                            <p>
                              Parce que votre carrière dure dans le temps, votre
                              accès durera à vie. Vous aurez toujours accès a
                              tous les contacts musicaux et contacts médias sans
                              aucune limite dans le temps.
                            </p>
                            <div className="slider-dots">
                              <div className="slider"></div>
                              <div
                                className={classNames('slider', 'open')}
                              ></div>
                            </div>
                            <button
                              type="button"
                              onClick={nextPage}
                              className="btn"
                              id="secondNext"
                            >
                              Suivant
                            </button>
                          </div>
                        </div>
                      )}

                      {/*  */}
                      {/* SIGNUP SLIDE */}
                      {/*  */}

                      {pageNum == 2 && (
                        <div className={classNames('page', 'emailEntry')}>
                          <div className="header-form"></div>

                          <div className="field">
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
                              <label htmlFor="email">
                                Votre adresse e-mail :
                              </label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Votre adresse e-mail"
                                autoComplete="off"
                                value={state.email}
                                onChange={changeValue}
                              />
                              <span className="error-message" id="email-span">
                                Error message
                              </span>
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
                          </div>
                        </div>
                      )}

                      {/*  */}
                      {/* PAYMENT SLIDE */}
                      {/*  */}

                      {pageNum == 3 && (
                        <Payment
                          ccNumber={state.ccNumber}
                          setPageNum={setPageNum}
                        />
                      )}

                      {/*  */}
                      {/* PAYMENT DONE SLIDE */}
                      {/*  */}

                      {pageNum == 4 && (
                        <div className={classNames('page', 'intro', 'end')}>
                          <div className="field">
                            <div className="payment-heading">
                              <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 367.805 367.805"
                                // style="enable-background:new 0 0 367.805 367.805;"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    style={{ fill: '#3BB54A' }}
                                    d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                                  />
                                  <polygon
                                    style={{ fill: '#D4E1F4' }}
                                    points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 256.001,103.968 "
                                  />
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>
                              <h3>Your free trial has started</h3>
                              <h4>
                                <strong>Total billed today: $0</strong>
                              </h4>
                              <h4>Billed on Jun 30: $0</h4>
                              <hr className="hr-text" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus et eros ligula.
                            </p>
                            <div className="form-container">
                              <label htmlFor="name">Your name:</label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                autoComplete="off"
                                value={state.name}
                                onChange={changeValue}
                              />
                              <span className="error-message" id="name-span">
                                Error message
                              </span>
                              <label htmlFor="password">Your password:</label>
                              <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Your password"
                                autoComplete="off"
                                value={state.password}
                                onChange={changeValue}
                              />
                              <span
                                className="error-message"
                                id="password-span"
                              >
                                Error message
                              </span>
                            </div>
                            <div
                              onClick={setUpProfile}
                              className="btn-red3"
                              id="fifthNext"
                            >
                              Continue
                            </div>
                          </div>
                        </div>
                      )}

                      {/*  */}
                      {/* SLIDES END */}
                      {/*  */}
                    </form>
                  </div>
                </div>
              )}

              {/* {existant === 'connexion' && (
                <div className="existing" id="existing">
                  <div className={classNames('form-container', 'field')}>
                    <h2>Welcome back</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <label>Email</label>
                    <input
                      label="LoginEmail"
                      inputType="email"
                      value={login.LoginEmail}
                      onChange={(e) => handleLoginChange(e)}
                    />
                    <label>Mot de passe</label>

                    <input
                      label="LoginPassword"
                      inputType="password"
                      value={login.LoginPassword}
                      onChange={(e) => handleLoginChange(e)}
                      passwordShowHide={true}
                    />
                  </div>
                </div>
              )} */}

              {existant === 'connexion' && (
                <div className="container" id="container">
                  <div className="form-outer">
                    <form action="">
                      <Connexion />
                    </form>
                  </div>
                </div>
              )}

              {/* 
              

              */}
              {/* END OF MY JSX */}
            </Box>
          </Box>
        </Box>
      </LightboxWrapper>
    </LoginModalWrapper>
  );
};

// LoginModal style props
Lightbox.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object
};

// LoginModal default style
Lightbox.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Team member col default style
  col: {
    // width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px'
  },
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
  // Content wrapper style
  contentWrapper: {
    // pt: ['0px', '56px'],
    // pl: ['0px', '0px', '38px', '40px', '56px'],
    // pr: '32px',
    // pb: ['32px', '56px']
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84'
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48'
  }
};

export default Lightbox;
