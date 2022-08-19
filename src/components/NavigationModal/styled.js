import styled from "styled-components";

import { COLOR } from "@/constants/styles";

export const NavigationModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.mainBgTranspModal};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 50px;
    @media (max-width: 450px) {
        padding: 20px 20px;
    }
    @media (max-width: 400px) {
        padding: 20px 10px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 300px;
    select {
        max-width: 280px;
    }
    button {
        margin: 0;
    }
    input {
        max-width: 250px;
    }
    @media (max-width: 360px) {
        max-width: 250px;
        input {
            max-width: 200px;
        }
    }
`;

export const CloseBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
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
