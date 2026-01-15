import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #633a1f;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`;
