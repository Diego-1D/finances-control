import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { useState } from "react";
import { Modal } from "../Modal";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

export const TransactionArea = ({ currentMonth, onMonthChange }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const toggle = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.Area>
        <C.Button onClick={toggle}>+ Nova Transação</C.Button>
        {isOpenModal && <Modal onClose={toggle} />}
      </C.Area>
    </C.Container>
  );
};
