import styled from 'styled-components';

export const Container = styled.footer``;

export const Content = styled.div`
  padding: 0 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: #ff500f;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: #8a99b6;
  }

  img {
    height: 50px;
    padding: 10px;
    filter: invert(48%) sepia(25%) saturate(5515%) hue-rotate(354deg)
      brightness(101%) contrast(97%);
  }
`;
