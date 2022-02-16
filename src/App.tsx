import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { TransactionArea } from "./components/TransactionArea";
import { InfoArea } from "./components/InfoArea";
import { db } from "./config/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function App() {
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [listagem, setListagem] = useState<Item[]>([]);

 
  useEffect(() => {
    const q = query(collection(db, "items"), orderBy("date",'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lista: any[] = [];
      querySnapshot.forEach((doc) => {
        lista.push(doc.data());
      });
      setListagem(lista);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setFilteredList(filterListByMonth(listagem, currentMonth));
  }, [listagem, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (filteredList[i].expense === true) {
        incomeCount += filteredList[i].value;
      } else {
        expenseCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList, income, expense]);

  const handleMonthChange = (newMonth: string) => {
    console.log("month> ", newMonth);
    console.log("tipo da data> ", typeof newMonth);
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finances Control</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea income={income} expense={expense} />
        <TransactionArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
