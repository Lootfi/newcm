import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 75px 0 0 0;

  .sectionBox {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  }

  .image {
    margin: 30px 0 30px 0;
  }

  .imagetext {
  }

  .textimage {
    flex-direction: row-reverse;
  }

  .imagetext,
  .textimage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    margin: 50px 0 10px 0;
  }

  .imagetext .text,
  .textimage .text {
    width: 50%;
  }

  .image {
    height: min-content;
    width: 45%;
  }

  @media (max-width: 980px) {
    .imagetext,
    .textimage {
      flex-direction: column;

      .image {
        width: unset;
      }

      .text {
        width: 100%;
        text-align: center;
      }
    }
  }

  @media (max-width: 410px) {
    .imagetext,
    .textimage {
      .image {
        width: 100vw;
      }
    }
  }
`;

export default SectionWrapper;
