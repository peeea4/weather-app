import styled from "styled-components";

import { FONT_SIZE } from "@/constants/styles";

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeadingWrapper = styled.h1`
    font-size: ${FONT_SIZE.heading};
    text-align: left;
    @media (max-width: 767.98px) {
        font-size: ${FONT_SIZE.headingS};
    }
    @media (max-width: 576px) {
        font-size: ${FONT_SIZE.headingXS};
    }
`;

export const ParagraphWrapper = styled.p`
    font-size: ${FONT_SIZE.date};
    @media (max-width: 767.98px) {
        font-size: ${FONT_SIZE.dateS};
    }
    @media (max-width: 576px) {
        display: none;
        font-size: ${FONT_SIZE.dateS};
    }
`;

export const ParagraphWrapperMobile = styled.p`
    display: none;
    @media (max-width: 576px) {
        display: block;
        font-size: ${FONT_SIZE.dateS};
    }
`;
