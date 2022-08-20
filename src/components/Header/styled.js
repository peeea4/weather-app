import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 30px;
    @media (max-width: 991.98px) {
        justify-content: center;
    }
    @media (max-width: 767.98px) {
        justify-content: flex-end;
    }
    @media (max-width: 576px) {
        padding: 0px 5px;
    }
`;

export const NavBarMobile = styled.nav`
    display: none;
    @media (max-width: 767.98px) {
        display: block;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    @media (max-width: 767.98px) {
        display: none;
    }
`;

export const NavBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
    margin-top: 10px;
`;

export const Span = styled.span`
    width: 30px;
    height: 2px;
    background-color: white;
`;
