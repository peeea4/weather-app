import styled from "styled-components";

import backgroundImage from "@/assets/rain.jpg";

export const BackgroundWrapper = styled.div`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "gray")};
    width: 100%;
    height: 100%;
    padding: 100px;
`;

export const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlurWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 15% 20% auto 25%;
    backdrop-filter: blur(2px);
`;
