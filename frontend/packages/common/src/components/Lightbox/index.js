import React from 'react';
import LightboxWrapper from './Lightbox.style';
// import Image from 'gatsby-image';
// import PropTypes from 'prop-types';
// import Text from '../Text';
// import Heading from '../Heading';
import classNames from 'classnames';

import GLogo from '../../assets/image/g-logo.png';
import FLogo from '../../assets/image/f-logo.png';
import CCLogos from '../../assets/image/cc-logos.png';
import PLogo from '../../assets/image/p-logo.png';
import Lock from '../../assets/image/lock.png';

import Cleave from 'cleave.js/react';

import { LightboxContext } from '../../contexts/LightboxContext';

const Lightbox = () => {
  let [pageNum, setPageNum] = React.useState(0);

  const { state, dispatch } = React.useContext(LightboxContext);
  const spanEmail = document.getElementById('email-span');
  const spanCc = document.getElementById('cc-number-span');
  const spanName = document.getElementById('name-span');
  const spanPassword = document.getElementById('password-span');
  const container = document.getElementById('container');
  const existing = document.getElementById('existing');

  let changeValue = (e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: e.target });
  };

  function checkEmail(email) {
    dispatch({ type: 'VALIDATE_EMAIL', payload: email });
  }

  function openPayment(evt = null, payment = 'payment-pp') {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(payment).style.display = 'block';
    if (evt) evt.currentTarget.className += ' active';
  }

  async function nextPage(e) {
    e.preventDefault();
    if (pageNum === 0) {
      document.querySelector('.slide').style.marginLeft = '-14.28%';
    }
    if (pageNum === 1) {
      document.querySelector('.slide').style.marginLeft = '-28.56%';
    }
    if (pageNum === 2) {
      new Promise((resolve, reject) => {
        checkEmail(state.email);
        resolve();
      }).then(() => {
        console.log(state);
        if (state.emailValid === false) {
          console.log('error');
          spanEmail.className = 'error-message show';
          spanEmail.innerText = 'Please, enter a valid email address';
        } else if (state.emailValid === true) {
          document.querySelector('.slide').style.marginLeft = '-42.84%';
          document.getElementById('defaultOpen').click();
        }
      });
    }

    if (pageNum === 3) {
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
        document.querySelector('.slide').style.marginLeft = '-57.15%';
      }
    }

    if (pageNum === 4) {
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
        document.querySelector('.slide').style.marginLeft = '-71.43%';
      }
    }

    if (pageNum === 5) {
      document.querySelector('.slide').style.marginLeft = '-85.70%';
    }

    setPageNum(pageNum++);
  }

  return (
    <LightboxWrapper>
      <div className="container" id="container">
        <div className="form-outer">
          <form action="">
            {/* SLIDES BEGIN */}
            {/*  */}

            {/*  */}
            {/* INTRO SLIDE */}
            {/*  */}

            <div className={classNames('page', 'slide')}>
              <div className="header-form"></div>

              <div className="field">
                <h2>Try YourName for free</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus et eros ligula. Phasellus varius, risus ut sagittis
                  auctor, quam ante ultrices arcu, in venenatis dui odio vitae
                  sem.
                </p>
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

            {/*  */}
            {/* INTRO SLIDE 2 */}
            {/*  */}

            <div className="page">
              <div className="header-form"></div>

              <div className="field">
                <h2>Try YourName for pay</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus et eros ligula. Phasellus varius, risus ut sagittis
                  auctor, quam ante ultrices arcu, in venenatis dui odio vitae
                  sem.
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
                  Suivant 2
                </button>
              </div>
            </div>

            {/*  */}
            {/* SIGNUP SLIDE */}
            {/*  */}

            <div className="page">
              <div className="field">
                <h2>Sign up now!</h2>
                <p>Create an account to get started</p>
                <div className="sign-up-social">
                  <div className="google">
                    <img src={GLogo} alt="Google G" />
                    SIGN UP WITH GOOGLE
                  </div>
                  <div className="facebook">
                    <img src={FLogo} alt="Facebook F" />
                    SIGN UP WITH FACEBOOK
                  </div>
                </div>
                <hr className="hr-text" data-content="OR" />
                <div className="form-container">
                  <label htmlFor="email">Your email address:</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    autoComplete="off"
                    value={state.email}
                    onChange={changeValue}
                  />
                  <span className="error-message" id="email-span">
                    Error message
                  </span>
                  <div className="check-container">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="newsletter"
                      value="checked"
                    />
                    <label htmlFor="newsletter">Keep me updated</label>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  onClick={nextPage}
                  className="btn-red"
                  id="thirdNext"
                >
                  Continue with email
                </button>
              </div>
            </div>

            {/*  */}
            {/* PAYMENT SLIDE */}
            {/*  */}

            <div className={classNames('page', 'payment')}>
              <div className="field">
                <div className="padding-payment">
                  <div className="payment-heading">
                    <h3>Pay 0$ now.</h3>
                    <h3>Set up payment for later.</h3>
                    <hr />
                  </div>
                  <div className="payment-info">
                    <table
                      style={{
                        width: '300px',
                        fontSize: '13px',
                        margin: '0px auto'
                      }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            Annual Subscription (due Jul 30)
                          </td>
                          <td style={{ textAlign: 'right' }}>$180</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', color: '#3BB54A' }}>
                            24-hour Free Trail
                          </td>
                          <td style={{ textAlign: 'right', color: '#3BB54A' }}>
                            -$180
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left' }}>Due Now</td>
                          <td style={{ textAlign: 'right' }}>$0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="form-container">
                  <div className="tabs-payment">
                    <ul>
                      <li
                        className="tablinks"
                        id="defaultOpen"
                        onClick={(event) => openPayment(event, 'payment-cc')}
                      >
                        <img src={CCLogos} alt="CC logos" />
                      </li>
                      <li
                        className="tablinks"
                        onClick={(event) => openPayment(event, 'payment-pp')}
                      >
                        <img src={PLogo} alt="PayPal logo" />
                      </li>
                    </ul>
                  </div>
                  <div id="payment-cc" className="tabcontent">
                    <label htmlFor="cc-number">Your card number:</label>
                    {/* <input
                        id="cc-number"
                        className="input-cc"
                        type="tel"
                        name="ccNumber"
                        inputMode="numeric"
                        maxLength="19"
                        value={state.ccNumber}
                        onChange={changeValue}
                      /> */}
                    <Cleave
                      value={state.ccNumber}
                      id="cc-number"
                      name="ccNumber"
                      placeholder="Enter your credit card number"
                      options={{ creditCard: true }}
                      onChange={changeValue}
                    />
                    <span className="error-message" id="cc-number-span">
                      Error message
                    </span>
                  </div>
                  <div id="payment-pp" className="tabcontent">
                    <div>
                      <img src={PLogo} alt="PayPal logo" />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', marginTop: '10px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus et eros ligula. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vivamus et eros ligula.
                  </p>
                  <div onClick={nextPage} className="btn-red" id="fourthNext">
                    Start free trail
                  </div>
                </div>
                <div className="security-cc">
                  <div className="securty-1">
                    <p className="gua">100%</p>
                    <p>GUARANTEED</p>
                  </div>
                  <div className="securty-2">
                    <div className="ssl">
                      <img src={Lock} alt="Lock" />
                      Secured with SSL
                    </div>
                    <div className="help-number">
                      <p>Have a question?</p>
                      <p>763-343-1581</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            {/* PAYMENT DONE SLIDE */}
            {/*  */}

            <div className="page">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus et eros ligula.
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
                  <span className="error-message" id="password-span">
                    Error message
                  </span>
                </div>
                <div onClick={nextPage} className="btn-red" id="fifthNext">
                  Continue
                </div>
              </div>
            </div>

            {/*  */}
            {/* SLIDES END */}
            {/*  */}
          </form>
        </div>
      </div>

      <div className="existing" id="existing">
        <div className="field">
          <h2>Welcome back</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="sign-up-social">
            <div className="google">
              <img src={GLogo} alt="Google G" />
              LOG IN WITH GOOGLE
            </div>
            <div className="facebook">
              <img src={FLogo} alt="Facebook F" />
              LOG IN WITH FACEBOOK
            </div>
          </div>
        </div>
      </div>
    </LightboxWrapper>
  );
};

export default Lightbox;
