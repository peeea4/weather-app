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
`;

export const ParagraphWrapper = styled.p`
    font-size: ${FONT_SIZE.date};
`;
