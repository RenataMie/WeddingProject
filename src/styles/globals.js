import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`