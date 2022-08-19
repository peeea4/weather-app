import styled from "styled-components";

import { FONT_COLOR, FONT_SIZE } from "@/constants/styles";

export const LocationWrapper = styled.p`
    font-size: ${FONT_SIZE.city};
    color: ${FONT_COLOR.primary};
    @media (max-width: 767.98px) {
        font-size: ${FONT_SIZE.cityS};
    }
    @media (max-width: 576px) {
        font-size: ${FONT_SIZE.cityXS};
    }
`;
