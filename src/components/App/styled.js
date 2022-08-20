import styled from "styled-components";

import { COLOR } from "@/constants/styles";
import { WEATHER_BACKGROUND } from "@/constants/weatherIcons";

export const BackgroundWrapper = styled.div`
    background-image: ${(props) => `url(${WEATHER_BACKGROUND[props.currentWeather]})`};
    background-color: ${COLOR.mainBg};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 80px;
    @media (max-width: 800px) {
        padding: 40px;
    }
    @media (max-width: 576px) {
        padding: 0;
    }
`;

export const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlurWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 20% 35% 35%;
    backdrop-filter: blur(2px);
    box-shadow: ${COLOR.mainBoxShadow};
    @media (max-width: 576px) {
        grid-template-rows: 5% 15% auto 35%;
    }
`;
