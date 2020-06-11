import styled from 'styled-components';

export const Container = styled.main``;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10px;

  .first {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 0;

    .card {
      border-radius: 8px;
      background-color: #f6f7fb;
      height: 100px;
      width: 100%;

      display: flex;
      justify-content: space-between;
    }

    .card img:first-of-type {
      margin: auto 30px;
    }

    .card > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .card h3 {
      margin-bottom: 4px;
    }

    .card span {
      font-size: 14px;
      color: #b3b7ce;
    }

    .card img:last-of-type {
      margin: auto 20px;
    }

    ul {
      list-style: none;
      margin: 20px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    ul li {
      margin: 0 7px 20px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    ul li span {
      margin-top: 5px;
      text-align: center;
      font-weight: 300;
    }

    .circle {
      background-color: #f6f7fb;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      margin: 0 auto;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .circle img {
      height: 42px;
      width: 42px;
    }
  }

  .divider {
    margin-left: 20px;
    border-bottom: 1px solid #e6e7f1;
  }

  .second {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;

    > span {
      margin-bottom: 5px;
      color: #929ba2;
    }

    .card {
      border-radius: 8px;
      background-color: #f6f7fb;
      height: 100px;
      width: 100%;
      padding: 0 20px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card .circle {
      background-color: #fff;
      border-radius: 50%;
    }

    .card span {
      font-size: 18px;
      font-weight: 300;
      margin-left: 10px;
      color: #9396a9;
    }

    .card .canihelpyou img {
      height: 56px;
      width: 56px;
    }

    .card .next img {
      height: 28px;
      width: 28px;
      margin: 10px;
    }
  }
`;
