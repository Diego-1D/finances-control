
import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';
import { setDoc, doc, collection, query, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

// type Props = {
//     onAdd: (item: Item) => void;
// }

export const InputArea = () => {

    const [titleField, setTitleField] = useState('');
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [valueField, setValueField] = useState(0);


    const handleAddEvent = () => {

        let errors: string[] = [];

        // if (isNaN(new Date(dateField).getTime())) {
        //     errors.push('Data inválida!');
        // }
        if (categoryField === '') {
            errors.push('Categoria vazia!');
        }
        if (titleField === '') {
            errors.push('Título vazio!');
        }
        if (valueField <= 0) {
            errors.push('Valor inválido!');
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            addDoc(collection(db, "items"), {
                // date: new Date(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            });
            // onAdd({
            //     // date: new Date(dateField),
            //     // category: categoryField,
            //     // title: titleField,
            //     // value: valueField,
            //     // expense:true

            // });
            clearFields();
        }
    }






    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }



    return (
        <C.Container>
            {/* <C.Area>
                <p>Data</p>
                <input type='date'
                    value={dateField}
                    onChange={e => setDateField(e.target.value)} />
            </C.Area> */}
            <C.Area>
                <p>Categoria</p>
                <input type='text'
                    value={categoryField}
                    onChange={e => setCategoryField(e.target.value)} />
            </C.Area>
            <C.Area>
                <p>Título</p>
                <input type='text'
                    value={titleField}
                    onChange={e => setTitleField(e.target.value)} />
            </C.Area>
            <C.Area>
                <p>Valor</p>
                <input
                    type='number'
                    value={valueField}
                    onChange={e => setValueField(parseFloat(e.target.value))}
                />
            </C.Area>
            <C.Area>
                <p>&nbsp;</p>
                <button onClick={handleAddEvent}>Adicionar</button>
            </C.Area>
            {/* <C.Area>
                <p>&nbsp;</p>
                <button onClick={addEvent}>Add</button>
            </C.Area> */}
        </C.Container>
    )
}