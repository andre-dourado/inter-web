import styled from 'styled-components';

import bgHomeEquityImg from '../../../../../assets/bg-home-equity.svg';
import arrowRightImg from '../../../../../assets/arrow-right.svg';

export const Container = styled.div`
  background: #ff7a00 url(${bgHomeEquityImg}) no-repeat center;
  border-radius: 8px;
  padding: 24px;

  height: 170px;
  width: 100%;
  max-height: 184px;
  max-width: 355px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;

  h4 {
    color: #ffed00;
    font-weight: 900;
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
      max-width: 197px;
    }

    ul li {
      color: #fff;
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
