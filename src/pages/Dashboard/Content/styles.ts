import styled from 'styled-components';

export const Container = styled.main`
  margin-bottom: 10px;
  width: 100%;
  max-width: 840px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 14px;

  .first {
    display: flex;
    flex-direction: column;

    @media (min-width: 840px) {
      flex-direction: row;
    }
  }

  .divider {
    margin: 10px -10px 10px 10px;
    border-bottom: 1px solid #e6e7f1;
  }
`;
