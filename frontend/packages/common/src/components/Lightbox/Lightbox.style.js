import styled from 'styled-components';
import FirstImage from '../../assets/image/first-page.jpg';

const LightboxWrapper = styled.div`

.container .payment4 {
  background-color: #31333b;
  color: #ffffff;
  height: 500px !important;
}

.payment4 .payment-top {
  padding: 20px 0 20px 20px;
}

.payment .payment-heading {
  text-align: left;
  line-height: 22px;
  width: 300px;
}

.payment4 .payment-info {
  width: 300px;
}

.payment4 hr {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #818078;
  opacity: 0.3;
}

.payment4 td {
  padding-left: 5px;
}

.payment4 .form-container {
  display: flex;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  height: 35%;
}

@media (max-width: 400px) {
.payment4 .form-container {
    width: 100vw !important;
}

}






// PAYMENT FOOTER


.payment4 .security-cc {
  display: flex;
  justify-content: space-around;
  align-items: center;

  &> * {
    text-align: center;
    width: 50%;
  }

  .security-1 {
    flex: 1;
  }

  .security-2 {
    display:flex;
    flex-direction: column;
    align-items:center;

  }

}

@media (max-width: 400px) {
  .payment4 .security-cc {
    width: 100vw;
    .help-number {
      width: 100%;
    }
  }
}



  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  height: 100%;

.existing .page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  .inputs {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .existing .page {
  width: 90vw !important;
  height: 90vh !important;

  .buttons {
    display: flex;
    flex-direction: column;
  }
}
}

.intro .field {
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 250px);
    width: 100%;
  justify-content: space-around;
}

@media (max-width: 400px) {
  .end {
    padding: 30px 0;
  }
}

.end .field {
  height: 100%;
}

@media (max-width: 400px){
  .intro .field {
    height: calc(100% - 300px);
    width: 100vw;
  }
  .end .field {
    height: calc(100% - 70px);
  }
}

.emailEntry .field {
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 260px);
  width: 100%;
  justify-content: space-around;
}

@media (max-width: 400px){
  .emailEntry .field {
    height: calc(100% - 300px);
    width: 100vw;
  }
  .emailEntry .field .emailPs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}





form .btn {
  border: 1px solid #b0b0b0;
  padding: 10px;
  width: 320px;
  bottom: 40px;
  font-family: 'Poppins', sans-serif;
  border-radius: 3px;
  background-color: transparent;
  transition: 0.3s;
  font-size: 15px;
}




.container .payment3 {
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.payment3 .tablinks img {
  width: 120px;
  padding: 10px 15px;

}

.payment3 h3 {
  padding-left: 15px;
  padding-top: 5px;
}

.payment3 .form-container {
  display:flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  align-items: center;

  flex: 2;
}

.payment3 .tabs-payment {
  border-bottom: 1px solid gray;
  width: 100%;
}

.payment3 .tabs-payment ul {
  display: flex;
  justify-content: space-around;
}

.payment3 .tabs-payment ul li {
  border: 1px solid gray;
  border-bottom: none;
}


.payment3 .tablinks.active {
  border-top: 3px solid #c83233;
  background-color: #ffffff;
  border-bottom: 2px solid white;
  position: relative;
  bottom: -1px;
}


.payment3 .payment-top {
  background-color: #31333b;
  color: white;

  flex: 1;
}



.btn-red3 {
  border: 1px solid #c83233;
  padding: 10px;
  width: 70%;
  font-family: 'Poppins', sans-serif;
  border-radius: 3px;
  transition: 0.3s;
  font-size: 15px;
  background-color: #c83233;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
}

.btn-red3:hover {
  background-color: #e63e3f;
}

.payment3 .security-cc {
  background-color: #31333b;
  color: white;

  flex: 2;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

@media (max-width:450px) {
  .payment3 .security-cc {
    width: 100%;
    flex-direction: column;
  }
}


@media (max-width:400px){
    .payment3 .form-container{
      width: 90vw;
    }

    .payment3 .security-cc {
      width: calc(100% - 50px);
      flex-direction: column;
    }
}



.loginModal {
  background: white;
}




@media (max-width: 400px){

  .page.form-container {
    width: 100vw;
  }
}

  .container * {
    margin: 0px;
    box-sizing: border-box;
  }

  .lightbox_container {
    background-color: rgb(255, 255, 255);
    color: #000;
    padding-top: 80px;
    padding-bottom: 80px;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }

  h2 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
  }

  h4,
  h5 {
    font-size: 15px;
    font-weight: 300;
  }

  label {
    display: block;
    font-size: 15px;
  }

  .check-container label {
    display: inline-block;
  }

  p {
    font-size: 15px;
    width: 350px;
    margin: 0px auto;
    margin-bottom: 10px;
  }

  .hr-text {
    line-height: 16px;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 24px;
    opacity: 0.5;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .hr-text:before {
    content: '';
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }

  .hr-text:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: #818078;
    background-color: #fcfcfa;
  }



  form .btn:hover {
    background-color: #191c21;
    color: #ffffff;
    cursor: pointer;
  }

  form .btn-red {
    border: 1px solid #c83233;
    padding: 10px;
    width: 320px;
    font-family: 'Poppins', sans-serif;
    border-radius: 3px;
    transition: 0.3s;
    font-size: 15px;
    background-color: #c83233;
    text-transform: uppercase;
    color: #ffffff;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%);
  }

  form .btn-red:hover {
    cursor: pointer;
    background-color: #e63e3f;
  }

  .container {
    position: absolute;
    background-color: #ffffff;
    width: 400px;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
  }

  .container .form-outer {
    width: 100%;
    background: white;
  }

  .form-outer form {
    display: flex;
  }

  .form-outer form .page {
    height: 585px;
    width: 400px;
    transition: 0.3s;
    position: relative;
  }

  .header-form {
    width: 100%;
    height: 200px;
    background: url(${FirstImage}) center no-repeat;
    background-size: cover;
  }

 

  .form-container {
    width: 100%;
  }

  .form-container .btn-red {
    bottom: -60px;
  }

  .form-container input {
    border: 1px solid #b0b0b0;
    padding: 10px;
    width: 77%;
    height: 45px;
    border-radius: 5px;
  }

  .form-container input:focus {
    border: 1px solid #000000;
  }

  .error {
    border: 3px solid #ff0000 !important;
  }

  .error-message {
    display: none;
    font-size: 13px;
    color: #ff0000;
  }

  .show {
    display: inline-block !important;
  }


  .true {
    display: block !important;
  }

  .false {
    display: none !important;
  }

  .check-container {
    width: 320px;
    margin: 0px auto;
    margin-top: 10px;
    text-align: left;
  }

  .checkbox {
    width: 20px !important;
    height: 20px !important;
    margin-right: 5px;
  }
  .check-container label {
    vertical-align: top;
    font-size: 15px;
  }

  .sign-up-social div {
    padding: 10px;
    width: 320px;
    color: #ffffff;
    margin: 0px auto;
    font-weight: 600;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .google {
    background-color: #4285f4;
  }

  .facebook {
    background-color: #4267b2;
  }

  .google img,
  .facebook img {
    width: 20px;
    border-radius: 2px;
    vertical-align: middle;
    margin-right: 10px;
  }


  .slider-dots {
    margin: 0px auto;
    text-align: center;
  }

  .slider {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #000000;
    opacity: 0.5;
    display: inline-block;
  }

  .slider.open {
    width: 7px;
    height: 7px;
    border-radius: 50px;
    background-color: #000000;
    opacity: 1;
    display: inline-block;
    margin: 0 7px;
  }

  .help-number p {
    font-size: 12px;
    margin: 0 !important;
  }

  .ssl {
    padding: 7px;
    border: 1px solid #818078;
    border-radius: 5px;
    font-size: 15px;
    margin-bottom: 5px;
  }

  .ssl img {
    width: 25px;
    vertical-align: middle;
    margin-right: 5px;
    padding-right: 5px;
    border-right: 1px solid #818078;
  }

  @media (max-width: 400px) {
    form .btn,
    form .btn-red {
      width: 60%;
    }

    form p {
      width 75%;
    }
    form .google,
    form .facebook {
      width: 75%;
    }
  }

  .inputs input {
    border: 1px solid #b0b0b0;
    width: 100%;
    height: 45px;
    border-radius: 5px;
  }

  @media (max-width: 500px){
    .payment3  {
      height:100vh !important;
    }
  }

`;

export default LightboxWrapper;
