import React from 'react';
import Loader from '../Loader';
import classNames from 'classnames';
import axios from '../../axios';
import { navigate } from 'gatsby';

export default function SetupProfile({ state, changeValue, price }) {
  const [loading, setLoading] = React.useState(false);
  const errorsRef = React.useRef('');

  function setUpProfile(e) {
    e.preventDefault();
    setLoading(true);
    if (state.name == '' || state.password == '') {
      errorsRef.current.style.color = 'red';
      errorsRef.current.innerHTML =
        'Les champs Nom et Mot de passe sont requis';
      setLoading(false);
    } else {
      axios
        .post(
          'setup-profile',
          {
            name: state.name,
            password: state.password,
            email: localStorage.getItem('email')
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        )
        .then((res) => {
          localStorage.removeItem('email');
          setLoading(false);
          navigate('/app');
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }

  return (
    <div className={classNames('page', 'end')}>
      <div className="field">
        <div className="payment-heading">
          <svg
            style={{ height: '50px' }}
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
          <h3>Votre abonnement a commencé</h3>
          <h4>
            <strong>Total facturé aujourd'hui: 0€</strong>
          </h4>
          <h4>Facturé le 25 Jan: {price} €</h4>
          <hr className="hr-text" />
        </div>
        <p>
          Entrez votre nom et choisissez un mot de passe pour entrer sur votre
          compte
        </p>

        <div className="form-container">
          <br />
          <label htmlFor="name">Votre nom:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="off"
            value={state.name}
            onChange={changeValue}
          />
          <br />
          <br />
          <label htmlFor="password">Votre Mot de passe:</label>
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
        <button
          onClick={setUpProfile}
          className="btn-red3"
          id="fifthNext"
          disabled={loading}
        >
          {loading ? <Loader /> : 'Continuer'}
        </button>
        <p ref={errorsRef}></p>
      </div>
    </div>
  );
}
