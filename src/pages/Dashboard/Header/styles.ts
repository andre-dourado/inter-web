import styled from 'styled-components';

export const Container = styled.header``;

export const HeaderContent = styled.div`
  background: linear-gradient(90deg, #ff500f 0%, #ff8700 100%);
  padding: 20px 20px 50px;

  color: #fff;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
  }

  strong {
    font-size: 20px;
    font-weight: 300;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6px;
  }

  span {
    opacity: 0.6;
    font-weight: 300;
    margin-right: 6px;
  }

  .balance {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
      opacity: 0.8;
      font-size: 14px;
    }

    .slide {
      margin-top: 10px;
      width: 100%;
      display: flex;
    }

    .slide div {
      width: 17px;
      border-bottom: 1px solid #fff;
      margin-right: 10px;
    }

    .slide div + div {
      opacity: 0.4;
    }
  }

  button.view {
    border: 0;
    background: none;
    cursor: pointer;

    .icon {
      width: 28px;
      height: 28px;

      background-color: #fff;
      mask: url('/assets/view.svg') no-repeat center / contain;
      -webkit-mask: url('/assets/view.svg') no-repeat center / contain;
    }
  }

  button.profile {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    border: none;

    color: white;
    font-size: 24px;
  }
`;
