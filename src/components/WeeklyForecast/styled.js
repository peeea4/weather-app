import styled from "styled-components";

import { COLOR } from "@/constants/styles";

export const WeeklyForecastWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    background-color: ${COLOR.mainBgTransp};
    height: max-content;
    padding:  10px;
    @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 0;
        max-height: 230px;
    }
    @media (max-width: 300px) {
        max-height: 250px;
    }
`;

export const ForecastList = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    overflow: auto;

    @media (max-width: 850px) {
        width: 390px;
    }
    @media (max-width: 800px) {
        width: 360px;
    }
    @media (max-width: 700px) {
        padding: 0 0 0 0;
        width: 270px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-top: 5px;
    }
`;

/*

@media (max-width: 576px) {}

@media (max-width: 767.98px) {}

@media (max-width: 991.98px) {}

@media (max-width: 1199.98px) {}

@media (max-width: 1399.98px) {}
*/
