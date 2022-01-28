import styled from "styled-components";

export const Table = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TableHeadeLine = styled.div`
    width: 95%;
    background-color:#416362;
    display: grid;
    grid-template-columns: 20% 30% 30% 20%;
    border-radius: 10px;

    @media(max-width: 495px){
        grid-template-columns: 24% 28% 28% 20%;
    }
`;

export const TableHeadeColumn = styled.div`
    padding: 12px 30px;
    font-size: 16px;
    color: #FFF;
    font-weight: bold;

    @media(max-width: 495px){
        padding: 12px 5px;
        font-size: 12px;
    }
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;