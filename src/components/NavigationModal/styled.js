import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const NavigationModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.mainBgTranspModal};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    @media (max-width: 450px) {
        padding: 20px 20px;
    }
    @media (max-width: 400px) {
        padding: 20px 10px;
    }
`;

export const Header = styled.header`
    font-size: ${FONT_SIZE.headingXS};
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px 0 30px;
`;

export const Title = styled.h2`
    font-size: ${FONT_SIZE.headingXS};
`;

export const ContentWrapper = styled.div`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 300px;
    button {
        margin: 0;
    }
`;

export const CloseBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
    span {
        width: 30px;
        height: 2px;
        background-color: white;
        &:first-child {
            transform: rotate(45deg);
            position: absolute;
        }
        &:last-child {
            position: relative;
            top: 0;
            left: 0;
            transform: rotate(-45deg);
        }
    }
`;
