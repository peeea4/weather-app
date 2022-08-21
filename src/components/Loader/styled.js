import styled, { keyframes } from "styled-components";

import { COLOR } from "@/constants/styles";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid ${COLOR.loaderColor};
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${spin} 1s linear infinite;
`;

export const LoaderWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.loaderBg};
`;
