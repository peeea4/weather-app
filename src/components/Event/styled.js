import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/constants/styles";

export const EventWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 25px;
`;

export const EventTime = styled.p`
    background-color: ${COLOR.mainBgTransp};
    border-radius: 18px;
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${FONT_SIZE.eventTime};
    position: relative;
    &::after {
        display: ${(props) => (props.isLast ? "none" : "block")};
        content: "";
        position: absolute;
        bottom: -25px;
        left: calc(50% - 5px);
        width: 2px;
        height: 25px;
        background-color: ${COLOR.mainBgTransp};
    }
`;

export const EventContent = styled.p`
    font-size: ${FONT_SIZE.event};
`;
