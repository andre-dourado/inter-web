import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #f5f6fa;
    color: #6C757D;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Lato', serif;
    font-size: 16px
  }
`;
