import styled from 'styled-components';

const LightboxWrapper = styled.div`
  background: transparent;
  padding: 15px 0 40px 0;
  color: #000;

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
`;

export const LightboxlSlideWrapper = styled.div`
  .glide__bullets {
    margin-top: 45px;
    text-align: center;
    @media (max-width: 575px) {
      margin-top: 30px;
    }
    .glide__bullet {
      width: 12px;
      height: 12px;
      background: #e7f1ed;
      margin: 5px;
      transition: 0.15s ease-in-out;
      &:hover {
        background: #d8e2de;
      }
      &.glide__bullet--active {
        background: #c9cecc;
      }
    }
  }
`;

export default LightboxWrapper;
