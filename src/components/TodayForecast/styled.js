import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const TodayForecastWrapper = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 70px;
    @media (max-width: 1250px) {
        padding: 0px 0px 0px 20px;
    }
    @media (max-width: 850px) {
        width: auto;
    }
    @media (max-width: 600px) {
        padding: 0 10px;
    }
    @media (max-width: 576px) {
        display: none;
        justify-content: flex-start;
        width: 100%;
        padding: 0 10px;
        background-color: ${COLOR.todayBackground};
    }
`;

export const TodayForecastWrapperMobile = styled.div`
    display: none;
    @media (max-width: 576px) {
        display: block;
        width: 100%;
        padding: 5px 5px 5px 0;
        background-color: ${COLOR.todayBackground};
    }
    @media (max-width: 300px) {
        display: block;
        width: 100%;
        padding: 5px 5px;
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
    @media (max-width: 1150px) {
        column-gap: 5px;
    }
    @media (max-width: 991.98px) {
        grid-template-areas:
            "day"
            "icon"
            "temperature";
        row-gap: 0px;
    }
    @media (max-width: 576px) {
        width: 50%;
        grid-template-areas: "day icon temperature";
        padding: 0px 0px;
        justify-items: flex-start;
        gap: 14%;
    }
`;

export const DetailedInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;
    @media (max-width: 1150px) {
        margin-left: 15px;
    }
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
        justify-content: space-between;
        gap: 15px;
        width: 50%;
    }
`;

export const Icon = styled.img`
    grid-area: icon;
    width: 90px;
    @media (max-width: 1050px) {
        width: 85px;
    }
    @media (max-width: 768px) {
        width: 75px;
    }
    @media (max-width: 576px) {
        width: 60px;
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
    @media (max-width: 1050px) {
        font-size: ${FONT_SIZE.infoM};
    }
    font-weight: 300;
`;
