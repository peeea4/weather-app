import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const DailyForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 5);
    height: 100%;
    padding: 40px 0px;
    justify-content: space-between;
`;

export const Day = styled.div`
    font-size: ${FONT_SIZE.dayOfWeek};
    background-color: ${COLOR.dayBg};
    padding: 6px 12px;
    border-radius: 12px;
`;

export const Image = styled.div``;

export const Temperature = styled.div`
    font-size: ${FONT_SIZE.temperatureSmall};
`;
