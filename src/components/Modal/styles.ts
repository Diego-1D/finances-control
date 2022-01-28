import styled from "styled-components";

export const Container = styled.div`
    left: 0;
    top: 0;
    right: 0;
    bottom:  0;
    position: fixed;
    background-color: rgba(1, 11, 14, 0.65);
    display: flex;
    align-items:center;
    justify-content: center;
    z-index:999;
    overscroll-behavior: block;
    padding: 0 15px;
`;

export const Area = styled.div`
    width: 23rem;
    height: 32rem;
    background-color: #FFF;
    padding: 0 20px;
    border-radius: 10px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: #010B0E;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    height: 27px;
    border: 1px solid #010B0E;
`;

export const Icon = styled.img`
    height: 27px;
    padding-right: 5px;
`;

export const InfoAreaExpense = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonExpense = styled.button`
    width: 9rem;
    height: 4rem;
    border-radius: 5px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 18px; 
    border: 0;
`;

export const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #006600;
    color: #FFF;
    font-weight: bold;
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0px;
    cursor: pointer;

    &:hover{
        background-color: #129212;
    }
`;

