import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #FFFFFF;
    color: #633A1F;
}

a {
    text-decoration: none;
    color: inherit;
}
`;
