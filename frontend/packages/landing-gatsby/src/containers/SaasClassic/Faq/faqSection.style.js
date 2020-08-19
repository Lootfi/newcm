import styled from 'styled-components';

const FaqSectionWrapper = styled.section`
  padding-bottom: 65px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 60px 0 15px;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .reusecore__accordion {
    max-width: 820px;
    margin: 0 auto;
    border-radius: 5px;

    .accordion__item {
      border-top: 0;
      background-color: #08153f;
      color: #fff;
      border-radius: 5px;
      transition: all 0.3s ease;
      cursor: pointer;
      i {
        opacity: 0.6;
      }

      .accordion__header {
        padding: 20px 30px;
        margin-bottom: 7px;
      }

      .accordion__body {
        padding: 5px 30px 20px;
      }
    }
  }

  .faqButton:hover {
    background: rgb(237, 205, 55);
    color: black;
  }
`;

export default FaqSectionWrapper;
