import styled from 'styled-components';

const LightboxWrapper = styled.footer`
  background: transparent;
  padding: 15px 0 40px 0;
  color: #000;

  .lightbox_container {
    background-color: rgb(255, 255, 255);
    padding-top: 80px;
    padding-bottom: 80px;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }
`;

export default LightboxWrapper;
