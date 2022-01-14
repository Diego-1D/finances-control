import { Item } from "../types/Item";

export const items: Item[] = [
    { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12, expense:true },
    { date: new Date(2022, 0, 15), category: 'food', title: 'Burger King', value: 28, expense:true },
    { date: new Date(2022, 0, 16), category: 'rent', title: 'Aluguel Apt', value: 2300, expense:true },
    { date: new Date(2022, 0, 18), category: 'salary', title: 'Salário ACME', value: 4500, expense:true },
    { date: new Date(2022, 1, 18), category: 'salary', title: 'Salário Amazonet', value: 4500, expense:true },
];