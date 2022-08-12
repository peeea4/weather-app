import styled from "styled-components";

import { COLOR } from "@/constants/styles";
import { WEATHER_BACKGROUND } from "@/constants/weatherIcons";

export const BackgroundWrapper = styled.div`
    background-image: ${(props) => `url(${WEATHER_BACKGROUND[props.currentWeather]})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 80px;
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
    grid-template-rows: 10% 20% auto 30%;
    backdrop-filter: blur(2px);

    box-shadow: ${COLOR.mainBoxShadow};
`;
