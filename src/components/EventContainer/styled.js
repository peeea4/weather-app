import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const EventContainerWrapper = styled.div`
    padding: 10px 80px;
    overflow-y: auto;
    @media (max-width: 800px) {
        padding: 10px 30px;
    }
    @media (max-width: 450px) {
        padding: 25px 30px;
    }
`;

export const EventListWrapper = styled.div`
    margin: 20px 0 0 20px;
`;

export const AuthorizeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Btn = styled.button`
    font-size: ${FONT_SIZE.button};
    border-radius: 18px;
    background-color: ${COLOR.mainBgTransp};
    border: 0px;
    padding: 6px 24px;
    cursor: pointer;
    @media (max-width: 576px) {
        padding: 4px 16px;
        font-size: ${FONT_SIZE.buttonXS};
    }
`;
