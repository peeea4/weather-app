import { createGlobalStyle } from "styled-components";

import { FONT_COLOR } from "@/constants/styles";

export const GlobalStyles = createGlobalStyle`
* {

    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: "Montserrat";

    color: ${FONT_COLOR.primary};
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

h1 {
    padding: 0;
    margin: 0;
}

#modal-root {
    position: absolute;
    top: 0;
    left: 0;
}
`;
