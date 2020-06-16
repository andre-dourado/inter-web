import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  background-color: #f6f7fb;
  height: 88px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (min-width: 840px) {
    width: 352px;
  }

  > div {
    display: flex;

    img:first-of-type {
      margin: auto 30px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  div > h4 {
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: #b3b7ce;
    /* max-width: 117px; */
  }

  img:last-of-type {
    margin: auto 20px;
  }
`;
