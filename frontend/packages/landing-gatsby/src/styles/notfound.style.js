import styled from 'styled-components';
import ErrorImage from 'common/src/assets/image/error.png';
export const NotFoundWrapper = styled.div`
  padding-top: 80px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  @keyframes aitf {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  .animation-text {
    font-size: 15rem;
    margin: 0;
    background: url(${ErrorImage}) repeat-y;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: aitf 80s linear infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    font-weight: 700;
    text-transform: uppercase;
  }

  .notFound {
    color: #00acc1;
    font-size: 24px;
    margin-top: 10px;
  }

  .bottomRow {
    & > * {
      margin: 5px;
    }
  }

  @media (max-width: 550px) {
    .spanParent {
      display: flex;
      flex-direction: column;
    }
    .animation-text {
      line-height: 1.5;
      font-size: 8em;
    }
  }
  .error {
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    top: -38px;
  }
`;
