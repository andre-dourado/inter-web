import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 10px 22px;
`;

export const Content = styled.div`
  .card {
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 15px;

    box-shadow: 0 10px 56px rgba(0, 0, 0, 0.12);

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
      }

      button {
        border: 0;
        background: none;
      }
    }
  }

  .main {
    display: flex;
    margin: auto 0;

    > img {
      height: 123px;
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
