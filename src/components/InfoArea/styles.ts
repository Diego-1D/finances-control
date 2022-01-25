import styled from "styled-components";

export const Container = styled.div`
    margin-top:-75px;
    display: flex;
`;

export const ResumeArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;

    @media(max-width: 769px){
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;
