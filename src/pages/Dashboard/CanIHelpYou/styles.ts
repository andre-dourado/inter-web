import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0 22px;
  width: 100%;
  max-width: 840px;

  @media (min-width: 1128px) {
    width: 264px;
  }
`;

export const Content = styled.div`
  border-radius: 8px;
  background-color: #edeef4;
  height: 100px;

  padding: 0 20px;
  border: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }

  .circle {
    background-color: #fff;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    margin-left: 8px;
    color: #9396a9;
  }

  .canihelpyou img {
    height: 40px;
    width: 40px;
  }

  .next img {
    height: 21px;
    width: 21px;
    margin: 10px;
  }
`;
