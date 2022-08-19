import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const TodayForecastWrapper = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 70px;
    @media (max-width: 1200px) {
        padding: 0px 0px 0px 20px;
    }
    @media (max-width: 600px) {
        padding: 0 10px;
    }
    @media (max-width: 576px) {
        justify-content: flex-start;
        width: 100%;
        padding: 0 10px;
        background-color: ${COLOR.todayBackground};
    }
`;

export const MainInfo = styled.div`
    padding: 20px 0px;
    display: grid;
    grid-template-areas:
        "icon day"
        "icon temperature";
    row-gap: 40px;
    column-gap: 20px;
    align-items: center;
    justify-items: center;
    @media (max-width: 991.98px) {
        grid-template-areas:
            "day"
            "icon"
            "temperature";
        row-gap: 0px;
    }
    @media (max-width: 576px) {
        grid-template-areas: "day icon temperature";
        padding: 0px 0px;
        justify-items: flex-start;
    }
`;

export const DetailedInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;
    @media (max-width: 650px) {
        margin-left: 10px;
    }
    @media (max-width: 576px) {
        display: none;
    }
`;
export const DetailedInfoMobile = styled.div`
    display: none;
    @media (max-width: 576px) {
        display: flex;
        justify-content: space-around;
        gap: 15px;
        width: 100%;
    }
`;

export const Icon = styled.img`
    grid-area: icon;
    width: 90px;
    @media (max-width: 576px) {
        width: 70px;
    }
    @media (max-width: 300px) {
        width: 50px;
    }
`;

export const Day = styled.div`
    grid-area: day;
    font-size: ${FONT_SIZE.dayOfWeekBig};
    background-color: ${COLOR.dayBg};
    padding: 6px 12px;
    border-radius: 18px;
    @media (max-width: 800px) {
        font-size: ${FONT_SIZE.dayOfWeekS};
    }
    @media (max-width: 300px) {
        font-size: ${FONT_SIZE.dayOfWeekXS};
    }
`;

export const Temperature = styled.div`
    grid-area: temperature;
    font-size: ${FONT_SIZE.temperatureBig};
    @media (max-width: 800px) {
        font-size: ${FONT_SIZE.temperatureL};
    }
    @media (max-width: 300px) {
        font-size: ${FONT_SIZE.temperatureS};
    }
`;

export const InfoItem = styled.div`
    font-size: ${FONT_SIZE.info};
    font-weight: 300;
`;
