import styled from "styled-components";

export const CurrentInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 80px;
    @media (max-width: 800px) {
        padding: 0px 30px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
