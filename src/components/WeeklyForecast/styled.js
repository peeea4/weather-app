import styled from "styled-components";

import { COLOR } from "@/constants/styles";

export const WeeklyForecastWrapper = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: center;
    background-color: ${COLOR.mainBgTransp};
`;

export const ForecastList = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
