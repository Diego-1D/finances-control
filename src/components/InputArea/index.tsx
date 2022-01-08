import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const [inp, setInp] = useState('');
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 2, 7),
            category: 'food',
            title: inp,
            value: 110.23
        };
        onAdd(newItem);
    }

    return (
        <C.Container>
            <C.Area style={{ backgroundColor: 'pink' }}>
                <p>Data</p>
            </C.Area>
            <C.Area style={{ backgroundColor: 'blue' }}>
                <p>Categoria</p>
            </C.Area>
            <C.Area style={{ backgroundColor: 'green' }}>
                <form>
                    <p>Título</p>
                    <input 
                    value={inp}
                    type='text' 
                    onChange={e => setInp(e.target.value)}/>
                </form>
            </C.Area>
            <C.Area style={{ backgroundColor: 'cyan' }}>
                <p>Valor</p>
            </C.Area>
            <C.Area style={{ backgroundColor: 'yellow' }}>
                <button onClick={handleAddEvent}>Adicionar</button>
            </C.Area>
        </C.Container>
    )
}