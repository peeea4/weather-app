import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const DailyForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 4);
    height: 100%;
    justify-content: space-between;
`;

export const Day = styled.div`
    font-size: ${FONT_SIZE.dayOfWeekSmall};
    background-color: ${COLOR.dayBg};
    padding: 6px 12px;
    border-radius: 18px;
`;

export const Image = styled.img`
    width: 70px;
`;

export const Temperature = styled.div`
    font-size: ${FONT_SIZE.temperatureSmall};
`;
