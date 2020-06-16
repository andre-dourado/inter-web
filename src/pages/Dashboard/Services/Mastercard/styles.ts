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
    height: 100%;
    align-items: center;

    img {
      width: 101px;
      height: 72px;
    }

    span {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      width: 94px;
      color: #8a99b6;
    }
  }
`;
