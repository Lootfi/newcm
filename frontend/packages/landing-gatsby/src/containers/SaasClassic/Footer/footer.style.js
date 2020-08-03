import styled from 'styled-components';
import FooterImage from '../../../../../common/src/assets/image/saasClassic/banner-image.jpg';

const FooterWrapper = styled.footer`
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 15px 0 40px 0;

  .footer_container {
    background-color: rgb(255, 255, 255);
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: rgba(52, 61, 72, 0.8);
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #343d48;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
