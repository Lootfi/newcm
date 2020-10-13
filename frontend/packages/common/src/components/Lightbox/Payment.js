import React from 'react';
import {
  CardElement,
  CardNumberElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import PLogo from '../../assets/image/p-logo.png';
import CCLogos from '../../assets/image/cc-logos.png';
import classNames from 'classnames';
import Lock from '../../assets/image/lock.png';
import axios from '../../axios';
import Loader from '../Loader';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Payment = ({ ccNumber, setPageNum, price, setPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const stripeErrorsRef = React.useRef('');

  const [openTab, setOpenTab] = React.useState(1);
  const [billingDetails, setBillingDetails] = React.useState({
    name: '',
    surname: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [clientSecret, setClientSecret] = React.useState(null);
  const prevOpenTab = usePrevious(openTab);
  const [date, setDate] = React.useState('');
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];

  React.useEffect(() => {
    // date logic
    let date = new Date();
    date.setDate(date.getDate() + 1);
    date = date.toISOString().split('T')[0].split('-');
    let day = date[2];
    let month = months[parseInt(date[1]) - 1];
    setDate(`${day} ${month}`);

    //stripe customer logic

    axios
      .post('create-customer', { email: localStorage.getItem('email') })
      .then((res) => setClientSecret(res.data))
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (prevOpenTab !== openTab && openTab == 1) {
      window.paypal
        .Buttons({
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
            actions.order
              .authorize()
              .then((details) => {
                setLoading(true);
                return axios
                  .post('paypal-payment-complete', {
                    name:
                      details.payer.name.given_name +
                      ' ' +
                      details.payer.name.surname,
                    order_id: data.orderID,
                    auth_id:
                      details.purchase_units[0].payments.authorizations[0].id,
                    email: localStorage.getItem('email')
                  })
                  .then((res) => {
                    if (window.location.port === '')
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
                    localStorage.setItem('token', res.data.access_token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    setPageNum(4);
                    setLoading(false);
                  })
                  .catch((err) => {
                    // console.log(err.response.data);
                  });
              })
              .catch((err) => {
                // console.log(err);
              });
          },
          style: {
            layout: 'horizontal'
          }
        })
        .render('#paypal-button');
    }
  }, [openTab]);

  const handleStripePay = async (event) => {
    event.preventDefault();

    stripeErrorsRef.current.innerHTML = '';

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${billingDetails.surname.trim()} ${billingDetails.name.trim()}`
        }
      }
    });

    if (result.error) {
      // Display result.error.message in your UI.
      stripeErrorsRef.current.innerHTML = result.error.message;
      setLoading(false);
    } else {
      // The setup has succeeded. Display a success message and send
      // result.setupIntent.payment_method to your server to save the
      // card to a Customer
      axios
        .post('stripe-payment-complete', {
          client_secret: result.setupIntent.client_secret,
          seti_id: result.setupIntent.id,
          payment_method: result.setupIntent.payment_method,
          email: localStorage.getItem('email')
        })
        .then((res) => {
          if (window.location.port === '')
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
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          setPageNum(4);
          setLoading(false);
        })
        .catch((err) => {
          stripeErrorsRef.current.innerHTML = err.response.data;
          setLoading(false);
        });
    }
  };

  function handleBillingChange(e) {
    e.preventDefault();

    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  }

  function openPaymentTab(tab) {
    setOpenTab(tab);
  }

  return (
    <div className={classNames('page', 'payment4')}>
      <div className="payment-top">
        <div className="payment-heading">
          <h3>Payez 0€ maintenant.</h3>
          <h3>Configurez le paiement pour plus tard</h3>
          <hr />
        </div>
        <div className="payment-info">
          <table>
            <tbody>
              <tr>
                <td>Accès illimité (dû le {date})</td>
                <td>{price} €</td>
              </tr>
              <tr>
                <td style={{ color: '#3BB54A' }}>24h Essai Gratuit</td>
                <td style={{ color: '#3BB54A' }}>-{price} €</td>
              </tr>
              <tr>
                <td>A régler aujourd'hui</td>
                <td>0 €</td>
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
              className={classNames('tablinks', openTab == 0 && 'active')}
              id="defaultOpen"
              onClick={() => openPaymentTab(0)}
            >
              <img src={CCLogos} alt="CC logos" />
            </li>
            <li
              className={classNames('tablinks', openTab == 1 && 'active')}
              onClick={() => openPaymentTab(1)}
            >
              <img src={PLogo} alt="PayPal logo" />
            </li>
          </ul>
          {openTab == 0 && (
            <form
              onSubmit={handleStripePay}
              data-secret={clientSecret}
              className="stripe-payment"
            >
              <div
                id="payment-cc"
                className="tabcontent"
                style={{
                  width: '95%',
                  display: 'block',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginTop: '20px'
                  // position: 'relative',
                  // left: '20px'
                }}
              >
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
                <div className="stripe_inputs_wrapper">
                  <input
                    type="text"
                    name="name"
                    className="stripe_input"
                    placeholder="Nom"
                    required
                    value={billingDetails.name}
                    onChange={handleBillingChange}
                  />
                  <input
                    type="text"
                    className="stripe_input"
                    name="surname"
                    placeholder="Surnom"
                    required
                    value={billingDetails.surname}
                    onChange={handleBillingChange}
                  />
                </div>
              </div>
              <p
                style={{ color: 'red', margin: '5px 0' }}
                ref={stripeErrorsRef}
              ></p>
              <button
                disabled={!stripe}
                type="submit"
                className="btn-red3"
                id="fourthNext"
              >
                {loading ? <Loader /> : 'Start free trail'}
              </button>
            </form>
          )}
          {openTab == 1 && (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '10px'
              }}
            >
              {loading && (
                <div style={{ pading: '3px' }}>
                  <Loader width="100px" height="100px" loaderColor="blue" />
                </div>
              )}
              <div style={{ width: '80%' }} id="paypal-button"></div>
            </div>
          )}
        </div>
      </div>
      {/* FORM END */}
      <div className="security-cc">
        <div className="security-1">
          <h1>100%</h1>
          <h3 style={{ margin: '-8px 0 5px 0' }}>GARANTI</h3>
          <p style={{ display: 'block', fontSize: '11px', width: '100%' }}>
            Nous offrons 24h avec une garantie de remboursement si vous n'aimez
            pas ContactMajor
          </p>
        </div>
        <div className="security-2">
          <div className="ssl">
            <img src={Lock} alt="Lock" />
            <span>Sécurisé avec SSL</span>
          </div>
          <div className="help-number">
            <p>Des Questions?</p>
            <p style={{ whiteSpace: 'nowrap' }}>+33 183 620 250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
