import styled from "styled-components";

import { COLOR } from "@/constants/styles";

export const WeeklyForecastWrapper = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: flex-start;
    background-color: ${COLOR.mainBgTransp};
    padding: 25px 0px;
`;

export const ForecastList = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
