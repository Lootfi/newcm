import React, { memo } from 'react';
import axios from '../../axios';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export default memo(function PaypalButton({ price, setPageNum }) {
  React.useEffect(() => {
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
  }, []);
  return <div style={{ width: '70%' }} id="paypal-button"></div>;
});
