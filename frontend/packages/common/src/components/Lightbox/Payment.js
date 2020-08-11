import React, { Fragment } from 'react';
import {
  Elements,
  CardElement,
  CardNumberElement
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CCLogos from '../../assets/image/cc-logos.png';
import PLogo from '../../assets/image/p-logo.png';
import classNames from 'classnames';
import Lock from '../../assets/image/lock.png';
import axios from '../../axios';
import Loader from '../Loader';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const stripePromise = loadStripe(
  'pk_test_51H3r6tGvxHsd96JzVpg8XK1ITL6WSuFdhTWt6PxcF7ekw9LR9Zidq2IVSbkE3ZwcO8zgk4w9wjFDXZpc7tvi0mOs00uCCEXVpL'
);

export default function Payment({ ccNumber, setPageNum }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  let price = null;

  React.useEffect(() => {
    axios.get('price').then((res) => {
      price = res.data;
    });
  }, []);

  function pay() {
    setPageNum(4);
  }

  React.useEffect(() => {
    if (openTab === 1) {
      window.paypal
        .Buttons({
          env: 'sandbox',
          commit: true,
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price.toFixed(),
                    currency_code: 'EUR'
                  }
                }
              ]
            });
          },
          onApprove: function (data, actions) {
            return actions.order
              .capture()
              .then(function (details) {
                axios
                  .post('paypal-payment-complete', {
                    name:
                      details.payer.name.given_name +
                      ' ' +
                      details.payer.name.surname,
                    order_id: data.orderID,
                    email: localStorage.getItem('email')
                  })
                  .then((res) => {
                    window.fbq('track', 'Purchase', {
                      currency: 'USD',
                      value: price.toFixed(2)
                    });
                    trackCustomEvent({
                      category: 'funnel',
                      action: 'step5_thankyou',
                      label: 'Funnel - Etape 5 - Thank you',
                      value: price
                    });
                    setPageNum(4);
                  })
                  .catch((err) => {
                    console.log(
                      'PAYPAL PAYMENT COMPLETE ERROR',
                      err.response.data
                    );
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          },
          style: {
            color: 'blue',
            layout: 'horizontal',
            size: 'large'
          }
        })
        .render('#paypal-button');
      setLoading(false);
    }
  }, [openTab]);

  function openPaymentTab(tab) {
    setOpenTab(tab);
  }

  return (
    <div className={classNames('page', 'payment3')}>
      <div className="payment-top">
        <div className="payment-heading">
          <h3>Pay 0$ now.</h3>
          <h3>Set up payment for later.</h3>
          <hr />
        </div>
        <div className="payment-info">
          <table style={{ width: 'calc(100% - 50px)' }}>
            <tbody>
              <tr>
                <td>Annual Subscription (due Jul 30)</td>
                <td>$180</td>
              </tr>
              <tr>
                <td style={{ color: '#3BB54A' }}>24-hour Free Trail</td>
                <td style={{ color: '#3BB54A' }}>-$180</td>
              </tr>
              <tr>
                <td>Due Now</td>
                <td>$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FORM START */}
      <div className="form-container">
        <div className="tabs-payment">
          <ul>
            <li
              className={classNames('tablinks', openTab == 1 && 'active')}
              onClick={() => openPaymentTab(1)}
            >
              <img src={PLogo} alt="PayPal logo" />
            </li>
            {/* <li
              className={classNames('tablinks', openTab == 0 && 'active')}
              id="defaultOpen"
              onClick={() => openPaymentTab(0)}
            >
              <img src={CCLogos} alt="CC logos" />
            </li> */}
          </ul>
        </div>
        {/* {openTab == 0 && (
          <Fragment>
            <div
              id="payment-cc"
              className="tabcontent"
              style={{
                width: '80%',
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                left: '20px'
              }}
            >
              <Elements stripe={stripePromise}>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4'
                        }
                      },
                      invalid: {
                        color: '#9e2146'
                      }
                    }
                  }}
                />
              </Elements>
            </div>
            <div onClick={pay} className="btn-red3" id="fourthNext">
              Start free trail
            </div>
          </Fragment>
        )} */}
        {openTab == 1 && (
          <div
            style={{
              width: '85%',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '10px'
            }}
          >
            {loading && (
              <Loader width="100px" height="100px" loaderColor="blue" />
            )}
            <div style={{ width: '70%' }} id="paypal-button"></div>
          </div>
        )}
      </div>
      {/* FORM END */}
      <div className="security-cc">
        <div className="securty-1">
          <h2 className="gua">100%</h2>
          <h2>GUARANTEED</h2>
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
  );
}

{
  /* <div className="field">
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
                onClick={() => openPaymentTab(0)}
              >
                <img src={CCLogos} alt="CC logos" />
              </li>
              <li className="tablinks" onClick={() => openPaymentTab(1)}>
                <img src={PLogo} alt="PayPal logo" />
              </li>
            </ul>
          </div>
          {openTab == 0 && (
            <div
              id="payment-cc"
              className="tabcontent"
              style={{
                width: '80%',
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                left: '20px'
              }}
            >
              <Elements stripe={stripePromise}>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4'
                        }
                      },
                      invalid: {
                        color: '#9e2146'
                      }
                    }
                  }}
                />
              </Elements>
            </div>
          )}
          {openTab == 1 && (
            <div
              style={{
                width: '85%',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '10px'
              }}
            >
              <div style={{ width: '70%' }} id="paypal-button"></div>
            </div>
          )}
          <div onClick={pay} className="btn-red" id="fourthNext">
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
      </div> */
}
