import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CCLogos from '../../assets/image/cc-logos.png';
import PLogo from '../../assets/image/p-logo.png';
import classNames from 'classnames';
import Lock from '../../assets/image/lock.png';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51H3r6tGvxHsd96JzVpg8XK1ITL6WSuFdhTWt6PxcF7ekw9LR9Zidq2IVSbkE3ZwcO8zgk4w9wjFDXZpc7tvi0mOs00uCCEXVpL'
);

export default function Payment({ ccNumber, openPayment }) {
  function pay(e) {
    e.preventDefault();
    document.querySelector('.slide').style.marginLeft = '-57.15%';
  }
  return (
    <div className={classNames('page', 'payment2')}>
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
          <div id="payment-pp" className="tabcontent">
            <div>
              <img src={PLogo} alt="PayPal logo" />
            </div>
          </div>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            eros ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus et eros ligula.
          </p>
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
      </div>
    </div>
  );
}

{
  /* <div className={classNames('page', 'payment')}>
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
                      /> */
}
{
  /* <Cleave
                      value={state.ccNumber}
                      id="cc-number"
                      name="ccNumber"
                      placeholder="Enter your credit card number"
                      options={{ creditCard: true }}
                      onChange={changeValue}
                    /> */
}

//         <Elements stripe={stripePromise}>
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '16px',
//                   color: '#424770',
//                   '::placeholder': {
//                     color: '#aab7c4'
//                   }
//                 },
//                 invalid: {
//                   color: '#9e2146'
//                 }
//               }
//             }}
//           />
//         </Elements>
//         <span className="error-message" id="cc-number-span">
//           Error message
//         </span>
//       </div>
//       <div id="payment-pp" className="tabcontent">
//         <div>
//           <img src={PLogo} alt="PayPal logo" />
//         </div>
//       </div>
//       <p style={{ fontSize: '12px', marginTop: '10px' }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
//         eros ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
//         elit. Vivamus et eros ligula.
//       </p>
//       <div onClick={pay} className="btn-red" id="fourthNext">
//         Start free trail
//       </div>
//     </div>
//     <div className="security-cc">
//       <div className="securty-1">
//         <p className="gua">100%</p>
//         <p>GUARANTEED</p>
//       </div>
//       <div className="securty-2">
//         <div className="ssl">
//           <img src={Lock} alt="Lock" />
//           Secured with SSL
//         </div>
//         <div className="help-number">
//           <p>Have a question?</p>
//           <p>763-343-1581</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
