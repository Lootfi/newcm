import styled, { keyframes } from 'styled-components';

const slideShow = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

export const ImageSlider = styled.div`
  max-width: 524px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 991px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 767px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(to right, black, rgba(255, 255, 255, 0));
    z-index: 1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotateZ(180deg);
  }
`;

export const ImageSlide = styled.div`
  height: 70px;
  flex-shrink: 0;
  animation: ${slideShow} 50s linear infinite;

  a {
    margin: 0 22px;
    transition: all 0.3s ease;
    filter: brightness(0.85);

    img {
      @media only screen and (max-width: 1360px) {
        max-height: 90%;
      }
      @media only screen and (max-width: 991px) {
        max-height: 80%;
      }
    }

    &:hover {
      filter: brightness(0.3);
    }
  }
`;

const SectionWrapper = styled.section`
  padding: 75px 0 0 0;

  .service_item {
    position: relative;
    text-align: center;
    .service_icon {
      width: 110px;
      height: 110px;
      border-radius: 35px;
      background-color: #ffecef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 28px auto;
      color: #ff4361;
      @media (max-width: 990px) {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }
  }

  .service_item_col {
    &:nth-child(1) {
      .service_item {
        .service_icon {
          font-size: 56px;
          @media (max-width: 990px) {
            font-size: 48px;
          }
        }
      }
    }

    &:nth-child(2) {
      .service_item {
        .service_icon {
          background-color: #eaf9ff;
          color: #45b1e1;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #45b1e1;
        }
      }
    }

    &:nth-child(3) {
      .service_item {
        .service_icon {
          background-color: #fff6d3;
          color: #d6ab00;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #d6ab00;
        }
      }
    }

    &:nth-child(4) {
      .service_item {
        .service_icon {
          background-color: #e4ffee;
          color: #40975f;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
          i {
            height: 36px;
          }
        }
        h3 {
          color: #40975f;
        }
      }
    }

    &:nth-child(5) {
      .service_item {
        .service_icon {
          background-color: #f4f4ff;
          color: #5856d6;
          font-size: 32px;
          @media (max-width: 990px) {
            font-size: 28px;
          }
        }
        h3 {
          color: #5856d6;
        }
      }
    }
  }
`;

export default SectionWrapper;
