import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  width: 90px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.02);

  display: flex;
  flex-direction: column;
  padding: 5px;

  span {
    word-wrap: break-word;
    text-align: center;
    margin: auto 0;
    font-size: 14px;
  }

  @media (min-width: 840px) {
    height: 120px;
    width: 120px;
  }
`;

export const Circle = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #f5f6fa;
  margin: auto;

  display: flex;
  justify-content: center;

  img {
    margin: auto;
    width: 18px;
    height: 18px;
  }

  @media (min-width: 840px) {
    width: 64px;
    height: 64px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
