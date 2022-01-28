import styled from "styled-components";

export const TableLine = styled.div`
    width: 95%;
    background-color:#FFF;
    margin: 10px 0px;
    display: grid;
    grid-template-columns: 20% 30% 30% 20%;
    border-radius: 10px;

    @media(max-width: 495px){
        grid-template-columns: 24% 28% 28% 20%;
    }
`;

export const TableColumn = styled.div`
    padding: 12px 30px;
    font-size: 16px;

    @media(max-width: 495px){
        padding: 12px 5px;
        font-size: 12px;
    }
`;


export const Value = styled.div<{color:string}>`
    color: ${props => props.color};
`;