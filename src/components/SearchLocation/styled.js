import styled from "styled-components";

import { COLOR, FONT_COLOR, FONT_SIZE } from "@/constants/styles";

export const SearchLocationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

export const SearchLocationInput = styled.input`
    color: ${FONT_COLOR.primary};
    background-color: transparent;
    font-size: ${FONT_SIZE.input};
    padding: 3px 10px;
    border: 0px;
    border-bottom: 2px solid ${COLOR.borderColor};
    &:focus {
        border: 0px;
        border-bottom: 2px solid ${COLOR.borderColor};
        outline: 0px;
    }
    &::placeholder {
        color: ${FONT_COLOR.placeholder};
    }
    
`;

export const SearchLocationButton = styled.button`
    background-color: transparent;
    background-image: url(${[(props) => props.backgroundImage]});
    background-repeat: no-repeat;
    background-size: cover;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 0;
    margin: 0px 30px 0px 6px;
`;
