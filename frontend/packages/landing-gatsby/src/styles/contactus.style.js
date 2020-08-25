import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding-top: 160px;
  background-color: black;
  color: white;

  .card.text-center {
      color: white;
      background-color: black !important;
  }

  .infoContainer {
      margin-bottom: 90px;
  }
  @media (max-width: 400px) {
    .infoContainer {
        margin-bottom: 60px;
    }
  }

  }
`;
