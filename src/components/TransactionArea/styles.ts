import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";

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
    justify-content: space-between;

    @media(max-width: 590px){
        padding: 10px 5px;
    }
`;

export const MonthArea = styled.div`
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media(max-width: 590px){
        width: 180px;
    }
`;

export const MonthArrowLeft = styled(FiArrowLeftCircle)`
    width: 25px;
    height: 25px;
    cursor: pointer;

    @media(max-width: 590px){
        width: 20px;
        height: 20px;
    }
`;

export const MonthArrowRight = styled(FiArrowRightCircle)`
    width: 25px;
    height: 25px;
    cursor: pointer;

    @media(max-width: 590px){
        width: 20px;
        height: 20px;
    }
`;

export const MonthTitle = styled.div`
     font-size: 18px;

     @media(max-width: 590px){
        font-size: 16px;
    }
`;

export const Area = styled.div`
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 230px;
    background-color: #006600;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: #129212;
    }

    @media(max-width: 590px){
        font-size: 12px;
        width: 125px;
        margin-left: 5px;
    }
`;
