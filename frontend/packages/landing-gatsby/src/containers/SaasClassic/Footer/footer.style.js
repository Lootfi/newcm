import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 100px 0 0 0;

  @media (max-width: 990px) {
    padding: 80px 0 0 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0 0 0;
  }
  @media (max-width: 575px) {
    padding: 70px 0 0 0;
  }

  position: relative;
  background: #000;
  overflow: hidden;
  color: #fff;
  @media (max-width: 400px) {
    padding-top: 0;
  }

  .footer_container {
    background-color: rgb(0, 0, 0);
    padding-bottom: 20px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }

  .bottomRow > * {
    & > *:nth-child(1) {
      padding-right: 5px;
      opacity: 0.6;
    }
    & > *:nth-child(2) {
      opacity: 0.6;
      padding-left: 5px;
    }
  }

  .bottomRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
  }
  @media (max-width: 400px) {
    .bottomRow > * {
      & > *:nth-child(1) {
        padding-right: 0px;
        opacity: 0.6;
      }
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: rgba(200, 200, 200, 0.8);
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
