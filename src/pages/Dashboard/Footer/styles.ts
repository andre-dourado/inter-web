import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  @media (min-height: 1170px) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContactUs = styled.div`
  background: #edeef4;
  padding: 16px 15px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    max-width: 1128px;

    span {
      font-size: 12px;
      color: #8a99b6;
    }

    > div {
      margin-right: auto;

      h4 {
        color: #ff500f;
        margin-bottom: 5px;
      }
    }
  }

  @media (max-width: 992px) {
    min-height: 119px;
  }
`;

export const Claims = styled.div`
  background: #fff;
  padding: 16px 15px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    max-width: 1128px;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      margin-right: auto;

      h4 {
        font-size: 12px;
        color: #526280;
        margin-bottom: 8px;
      }

      span {
        font-size: 12px;
        color: #8a99b6;
      }
    }

    > div + div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    min-height: 170px;
  }
`;
