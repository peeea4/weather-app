import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const TodayForecastWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0px 0px 0px 70px;
`;

export const Icon = styled.img`
    width: 90px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-left: 20px;
`;

export const Day = styled.div`
    font-size: ${FONT_SIZE.dayOfWeekBig};
    background-color: ${COLOR.dayBg};
    padding: 6px 12px;
    border-radius: 18px;
`;

export const Temperature = styled.div`
    font-size: ${FONT_SIZE.temperatureBig};
`;

export const DetailedInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;
`;

export const InfoItem = styled.div`
    font-size: ${FONT_SIZE.infoSmall};
    font-weight: 300;
`;
