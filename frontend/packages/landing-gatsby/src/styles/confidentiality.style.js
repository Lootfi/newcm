import styled from 'styled-components';

export const ClientHomeWrapper = styled.div`
  padding-top: 160px;
  background-color: black;
  color: white;
  height: 100vh;
  text-align: center;
`;

export const PasswordResetWrapper = styled.div`
  padding-top: 160px;
  background-color: black;
  color: white;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    height: 35%;
  }

  .btn-red3 {
    border: 1px solid #c83233;
    padding: 10px;
    width: 180px;
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

  .form-container input {
    border: 1px solid #b0b0b0;
    padding: 10px;
    width: 300px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .form-container input:focus {
    border: 1px solid #000000;
  }
`;

export const ConfidWrapper = styled.div`
  padding-top: 160px;
  background-color: black;
  color: white;
  ul {
    padding-left: 20px;
    li {
      padding: 7px;
    }
  }
`;

export const FoncWrapper = styled.div`
  padding-top: 80px;
  background-color: black;
  color: white;
`;

export const FaqWrapper = styled.section`
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
    background: rgb(235, 77, 75);
    color: black;
  }

  .loader {
    text-align: center;
  }
`;
