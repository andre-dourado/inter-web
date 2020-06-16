import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(90deg, #ff500f 0%, #ff8700 100%);
  width: 100%;

  @media (min-width: 1128px) {
    background: #fff;
  }
`;

export const Content = styled.div`
  max-width: 1128px;
  padding: 20px 20px 50px;
  margin: 0 auto;

  color: #fff;
  display: flex;
  justify-content: space-between;

  .logo {
    display: none;

    h4 {
      color: #8c91a5;
      margin-left: 23.71px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
  }

  button.profile {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    border: none;

    color: white;
    font-size: 24px;
  }

  .more {
    display: none;
  }

  @media (min-width: 1128px) {
    .logo {
      display: flex;
      align-items: center;
    }

    .menuButton {
      display: none;
    }

    button.profile {
      color: #ff500f;
    }

    .more {
      display: block;
      margin-left: 12px;
    }
  }
`;

export const SubHeader = styled.div`
  display: none;
  height: 64px;
  width: 100%;
  background: linear-gradient(90deg, #ff500f 0%, #ff8700 100%);

  @media (min-width: 1128px) {
    display: block;
  }
`;

export const SimulatorButton = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: none;
  height: 40px;
  width: 173px;
  margin-right: 4%;

  @media (min-width: 768px) {
    margin-right: 24px;
  }

  @media (min-width: 1128px) {
    background: #fff;
    color: #ff500f;
    border-color: #ff500f;
  }
`;
