import styled from "styled-components";

export const Container = styled.div`
    width: 190px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #CCC;
    padding: 15px;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #416362;
    margin-bottom: 25px;
`;

export const Info = styled.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.color ?? '#000'};
`;