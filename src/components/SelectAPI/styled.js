import styled from "styled-components";

import { COLOR, FONT_COLOR, FONT_SIZE } from "@/constants/styles";

export const SelectWrapper = styled.select`
    background-color: transparent;
    font-size: ${FONT_SIZE.input};
    color: ${FONT_COLOR.primary};
    background: transparent;
    padding: 3px 10px;
    border: 0px;
    border-bottom: 2px solid ${COLOR.borderColor};
    cursor: pointer;
    &:focus {
        border: 0px;
        border-bottom: 2px solid ${COLOR.borderColor};
        outline: 0px;
    }
    option {
        background-color: transparent;
        color: ${FONT_COLOR.secondary};
    }
`;

export const OptionWrapper = styled.option`
    background-color: transparent;
    &:hover {
        background: transparent;
    }
`;
