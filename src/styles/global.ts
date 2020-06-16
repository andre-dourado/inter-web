import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #f5f6fa;
    color: #6C757D;
    -webkit-font-smoothing: antialiased;

    height: 100%;
    position: relative;
  }

  body, button {
    font-family: 'Lato', serif;
    font-size: 16px
  }

  button {
    cursor: pointer;
  }
`;
