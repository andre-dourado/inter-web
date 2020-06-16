import styled from 'styled-components';

import arrowRightImg from '../../../../../assets/arrow-right.svg';

export const Container = styled.div`
  background: #ff500f;
  border-radius: 8px;
  padding: 24px;

  width: 100%;
  height: 170px;
  max-height: 184px;
  max-width: 355px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;

  > span {
    color: #fff;
    margin-bottom: 5px;
  }

  h4 {
    color: #ffed00;
    font-weight: 900;
    max-width: 215px;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    ul {
      list-style-image: url(${arrowRightImg});
      list-style-position: inside;
      margin-right: 8px;
    }

    ul li {
      color: #fff;
      width: 117px;
    }

    button {
      border: 0;
      border-radius: 4px;
      background: #ffed00;
      min-width: 108px;
      min-height: 32px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button span {
      color: #867e1a;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
