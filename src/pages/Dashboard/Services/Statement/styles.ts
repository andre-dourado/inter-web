import styled from 'styled-components';

export const Container = styled.div`
  min-height: 176px;
  min-width: 264px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 15px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);

  .header {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }

    > div span {
      margin-left: 10px;
      color: #6c757d;
      font-size: 12px;
    }

    button {
      border: 0;
      background: none;
    }

    button img {
      height: 11px;
      width: 11px;
    }
  }

  .main {
    display: flex;
    margin-top: 14px;

    p {
      font-size: 12px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
    }

    > img {
      width: 123px;
    }

    > div {
      margin-left: 5px;
      font-weight: 300;
    }

    .income {
      margin-bottom: 15px;
    }

    .income span {
      color: #20c05c;
    }

    .outcome span {
      color: #fd4f48;
    }
  }
`;
