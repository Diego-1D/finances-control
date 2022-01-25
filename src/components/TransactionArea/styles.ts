import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px 60px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const Area = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.div`
    padding: 10px 30px;
    background-color: #379964;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;
