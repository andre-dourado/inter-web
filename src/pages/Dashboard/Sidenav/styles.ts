import styled from 'styled-components';

interface Props {
  open?: boolean;
}

export const Container = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;

  background: #fff;
  color: #8a99b6;
  width: 264px;
  text-align: left;
  padding: 3.5rem 1.5rem 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) =>
    open
      ? 'translateX(0); box-shadow: 0 10px 56px rgba(0, 0, 0, 0.2);'
      : 'translateX(-100%)'};

  @media (min-width: 1128px) {
    position: static;
    height: 600px;
    margin-top: -30px;
    padding-top: 24px;

    transform: translateX(0);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
`;

export const Content = styled.div``;

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 216px;
  height: 72px;

  background: #f5f6fa;
  padding: 16px 30px 16px 24px;

  > div {
    > span {
      font-size: 12px;
    }

    h4 {
      font-weight: bold;
    }

    h4 span {
      font-weight: normal;
    }
  }

  button {
    border: 0;
    background: none;
    filter: invert(47%) sepia(17%) saturate(7494%) hue-rotate(355deg)
      brightness(103%) contrast(97%);

    img {
      height: 16px;
      width: 16px;
    }
  }
`;

export const Investment = styled.div`
  background: linear-gradient(90deg, #ff500f 0%, #ff8700 100%);
  border-radius: 4px;
  width: 216px;
  height: 32px;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 32px;
  padding-left: 16px;
  margin-top: 8px;

  span {
    font-size: 12px;
  }

  img {
    height: 16px;
    width: 16px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 28px;

  li {
    display: flex;
    width: 216px;
    height: 48px;
    align-items: flex-start;

    border-bottom: 1px solid #f5f6fa;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;
      }
    }
  }

  li + li {
    margin-top: 16px;
  }

  li:last-of-type {
    border-bottom: 0;
  }
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f5f6fa;
  display: flex;
  margin-right: 12px;

  img {
    height: 16px;
    width: 16px;
    margin: auto;
    filter: invert(60%) sepia(92%) saturate(3044%) hue-rotate(0deg)
      brightness(104%) contrast(103%);
  }
`;
