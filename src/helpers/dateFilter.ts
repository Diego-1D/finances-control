import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  console.log("TESTEss: ", list);

  let newList: Item[] = [];
  let [year, month] = date.split("-");

  console.log("");

  let listDate: Item[] = [];

  for (let i in list) {
    listDate.push({
      category: list[i].category,
      date: new Date(list[i].date),
      expense: list[i].expense,
      title: list[i].title,
      value: list[i].value,
    });
  }

  console.log("lista nova: ", listDate);

  for (let i in listDate) {
    console.log("mes da data lisssa: ", listDate[i].date.getMonth());
    console.log("mes atual: ", parseInt(month));
    if (
      listDate[i].date.getFullYear() === parseInt(year) &&
      listDate[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(listDate[i]);
    }
  }

  console.log("nova listagem: ", newList);

  return newList;
};

export const formatDate = (firebaseTimestamp: any): string => {
  const date = new Date(firebaseTimestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};
