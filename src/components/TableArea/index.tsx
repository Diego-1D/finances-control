import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
                <C.TableHeadeLine>
                    <C.TableHeadeColumn>Data</C.TableHeadeColumn>
                    <C.TableHeadeColumn>Categoria</C.TableHeadeColumn>
                    <C.TableHeadeColumn>Título</C.TableHeadeColumn>
                    <C.TableHeadeColumn >Valor</C.TableHeadeColumn>
                </C.TableHeadeLine>
            <C.Body>
                {
                    list.map((item, index) => (
                        <TableItem key={index} item={item} />
                    ))
                }
            </C.Body>
        </C.Table>
    )
}