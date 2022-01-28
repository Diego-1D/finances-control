import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import moment from "moment";

export const Modal = ({ id = "modal", onClose = () => { } }) => {
  const [titleField, setTitleField] = useState("");
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [valueField, setValueField] = useState(0);
  const [expenseField, setExpenseField] = useState(false);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (categoryField === "") {
      errors.push("Categoria vazia!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let now = new Date();
      console.log("data selecionada: ", typeof dateField);

      console.log("dataaa>: ", now);

      let newDate = moment(dateField).format("YYYY/MM/DD");

      console.log("dataaa>: ", newDate);

      addDoc(collection(db, "items"), {
        date: newDate,
        category: categoryField,
        title: titleField,
        value: valueField,
        expense: expenseField,
      });
      clearFields();
      onClose();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  const handleOutsideClick = (event: any) => {
    if (event.target.id === id) onClose();
  };

  return (
    <C.Container id={id} onClick={handleOutsideClick}>
      <C.Area>
        <C.InfoArea>
          <C.Title>Data:</C.Title>
          <C.Input
            style={{ width: "130px" }}
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </C.InfoArea>
        <C.InfoArea>
          <C.Title>Categoria:</C.Title>
          <C.Input
            type="text"
            value={categoryField}
            onChange={(e) => setCategoryField(e.target.value)}
          />
        </C.InfoArea>
        <C.InfoArea>
          <C.Title>Título:</C.Title>
          <C.Input
            type="text"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
        </C.InfoArea>
        <C.InfoAreaExpense>
          <C.ButtonExpense
            onClick={() => setExpenseField(true)}
            color={expenseField === true ? '#116d45': '#4bad83'}
          >
            <C.Icon src="https://cdn-icons-png.flaticon.com/512/1692/1692598.png" />
            <C.Title>ENTRADA</C.Title>
          </C.ButtonExpense>
          <C.ButtonExpense
            onClick={() => setExpenseField(false)}
            color={expenseField === false ? 'rgb(255, 0, 0)': 'rgba(255, 0, 0, 0.7)'}
          >
            <C.Icon src="https://cdn-icons-png.flaticon.com/512/3141/3141818.png" />
            <C.Title>SAÍDA</C.Title>
          </C.ButtonExpense>
        </C.InfoAreaExpense>
        <C.InfoArea>
          <C.Title>Valor:</C.Title>
          <C.Input
            type="number"
            value={valueField}
            onChange={(e) => setValueField(parseFloat(e.target.value))}
          />
        </C.InfoArea>
        <C.AddButton onClick={handleAddEvent}>
          Adicionar nova transação
        </C.AddButton>
      </C.Area>
    </C.Container>
  );
};
