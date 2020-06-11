import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .back {
    height: 100px;
    background-color: #f9f9f9;
    box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.02);
  }
`;

export const Content = styled.div`
  position: absolute;
  top: -30px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li.card {
      height: 90px;
      width: 90px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.02);

      display: flex;
      flex-direction: column;
      padding: 5px;

      .circle {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        background-color: #F5F6FA;
        margin: 0 auto;

        display: flex;
        justify-content: center;
      }

      .circle img {
        width: 18px;
      }

      span {
        word-wrap: break-word;
        text-align: center;
        margin: auto 0;
        font-size: 14px;
      }
    }
  }

  button.more {
    border: 0;
    background: none;
  }

  button.more img {
    width: 48px;
    filter: invert(48%) sepia(25%) saturate(5515%) hue-rotate(354deg) brightness(101%) contrast(97%);
  }

`;

