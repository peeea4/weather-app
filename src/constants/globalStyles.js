import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: Helvetica;
}

html, body {
    width: 100%;
    height: 100%;
}

body {  
    & > #root {
        width: 100%;
        height: 100%;
    }
}

body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`;
