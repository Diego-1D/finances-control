import { useState, useEffect } from "react";
import * as C from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { db } from "./config/firebase";
import { collection, query, getDocs } from 'firebase/firestore';


function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [agendamentos, setAgendamentos] = useState<Item[]>([]);

  const citiesRef = async () => {
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    const agendamentoLista:any = [];
    querySnapshot.forEach(doc => {
      agendamentoLista.push(doc.data());
    });
    setAgendamentos(agendamentoLista);
    console.log(agendamentoLista);
  }

  useEffect(() => {
    citiesRef();
  }, [])


  // useEffect(() => {
  //   setFilteredList(filterListByMonth(list, currentMonth));
  // }, [list, currentMonth]);

  
  useEffect(() => {
    setFilteredList(agendamentos);
  }, [agendamentos]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (filteredList[i].expense = true) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  // const handleAddItem = (item: Item) => {
  //   let newList = [...agendamentos];
  //   newList.push(item);
  //   setList(newList);
  // }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* <InputArea onAdd={handleAddItem} /> */}
        <InputArea/>
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
