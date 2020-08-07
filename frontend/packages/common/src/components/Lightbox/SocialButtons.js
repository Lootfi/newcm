import React from 'react';
import SocialButton from './SocialButton';

export default function SocialButtons() {
  const handleFacebookLogin = (user) => {
    console.log(user);
  };

  const handleFacebookLoginFailure = (err) => {
    console.error(err);
  };

  const handleGoogleLogin = (user) => {
    console.log(user);
  };

  const handleGoogleLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <div>
      <div id="facebook-button">
        <SocialButton
          provider="facebook"
          appId="283151122939440"
          onLoginSuccess={handleFacebookLogin}
          onLoginFailure={handleFacebookLoginFailure}
        >
          Login with Facebook
        </SocialButton>
      </div>
      <div id="google-button">
        <SocialButton
          provider="google"
          appId="180042010133-uh45ck3npaub4st9p6sijsk9577lmp4b.apps.googleusercontent.com"
          onLoginSuccess={handleGoogleLogin}
          onLoginFailure={handleGoogleLoginFailure}
        >
          Login with Google
        </SocialButton>
      </div>
    </div>
  );
}
