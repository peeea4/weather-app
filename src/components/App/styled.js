import styled from "styled-components";

import dayBackground from "@/assets/day.jpg";
import nightBackground from "@/assets/night.jpg";
import backgroundImage from "@/assets/sunny3.jpg";
import { COLOR } from "@/constants/styles";

export const BackgroundWrapper = styled.div`
    background-image: ${(props) => (props.backgroundImageTime === "night"
        ? `url(${nightBackground})`
        : `url(${dayBackground})`)};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 80px;
`;

export const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${backgroundImage});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    
`;

export const BlurWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 10% 20% auto 30%;
    backdrop-filter: blur(2px);

    box-shadow: ${COLOR.mainBoxShadow};
`;
