import React, { Fragment } from 'react';
import Heading from '../Heading';
import Text from '../Text';
import Button from '../Button';
import Image from '../Image';
import Input from '../Input';
import classNames from 'classnames';
export default function Connexion({
  btnStyle,
  titleStyle,
  outlineBtnStyle,
  descriptionStyle
}) {
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  });
  let handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div className="existing" id="existing">
      <div className={classNames('page', 'form-container')}>
        <Heading content="Bienvenue!" {...titleStyle} />
        <Text
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          {...descriptionStyle}
        />

        <div className="inputs">
          <label>Email</label>
          <input
            type="email"
            value={login.email}
            onChange={handleLoginChange}
          />
          <label>Mot de passe</label>

          <input
            type="password"
            value={login.password}
            onChange={handleLoginChange}
          />
        </div>
        <div className="buttons">
          <Button className="default" title="LOGIN" {...btnStyle} />
          <Button
            title="Forget Password"
            variant="textButton"
            {...outlineBtnStyle}
          />
        </div>
      </div>
    </div>
  );
}

Connexion.defaultProps = {
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
  }
};
