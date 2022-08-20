import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const DailyForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 4);
    justify-content: space-between;
    gap: 6px;
    padding: 2px 10px;
    @media (max-width: 850px) {
        width: 130px;
        padding: 0 30px;
    }
    @media (max-width: 800px) {
        width: 120px;
    }
    @media (max-width: 700px) {
        width: 120px;
        padding: 0 10px;
    }
    @media (max-width: 576px) {
        flex-direction: row;
        width: 100%;
    }
    @media (max-width: 350px) {
        padding: 0 5px;
    }
`;

export const DayOfWeek = styled.div`
    font-size: ${FONT_SIZE.dayOfWeekS};
    background-color: ${COLOR.dayBg};
    padding: 4px 12px;
    border-radius: 18px;
    @media (max-width: 576px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        padding: 5px 0px;
    }
    @media (max-width: 400px) {
        font-size: ${FONT_SIZE.dayOfWeekXS};
        width: 60px;
    }
    @media (max-width: 300px) {
        width: 55px;
        padding: 2px 0px;
    }
`;

export const Image = styled.img`
    width: 55px;
    @media (max-width: 576px) {
        width: 50px;
    }
    @media (max-width: 300px) {
        width: 40px;
    }
`;

export const Temperature = styled.div`
    font-size: ${FONT_SIZE.temperatureL};
    @media (max-width: 576px) {
        width: 50px;
        font-size: ${FONT_SIZE.temperatureS};
    }
    @media (max-width: 300px) {
        width: 35px;
        font-size: ${FONT_SIZE.temperatureXS};
    }
`;

export const Humidity = styled.div`
    width: 35px;
    @media (max-width: 576px) {
        font-size: ${FONT_SIZE.infoS};
        width: 60px;
        padding: 5px 0px;
    }
    @media (max-width: 450px) {
        width: 50px;
    }
    @media (max-width: 350px) {
        width: 35px;
    }
    @media (max-width: 300px) {
        width: 30px;
    }
`;

export const WindSpeed = styled.div`
    width: 70px;
    @media (max-width: 576px) {
        font-size: ${FONT_SIZE.infoS};
    }
    @media (max-width: 300px) {
        width: 60px;
    }
`;
