import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #000;
`;

export const Value = styled.div<{color:string}>`
    color: ${props => props.color};
`;