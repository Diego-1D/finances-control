import styled from "styled-components";

export const TableLine = styled.div`
    width: 100%;
    background-color:#FFF;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    border-radius: 10px;
`;

export const TableColumn = styled.div`
    padding: 12px 70px;
    font-size: 16px;
    flex: 1;
`;


export const Value = styled.div<{color:string}>`
    color: ${props => props.color};
`;