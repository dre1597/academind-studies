import { Item } from '../../store/cart-context';
import { Amount, ItemList, Price, Summary } from './CartItemStyles';
import { Actions } from './CartStyles';

interface Props {
    id: string;
    price: number;
    name: string;
    amount: number;
    item: Item;
    onRemove: (id: string) => void;
    onAdd: (item: Item) => void;
}

const CartItem: React.FC<Props> = ({
    id,
    price,
    name,
    amount,
    item,
    onRemove,
    onAdd,
}) => {
    const priceFormatted = `$${price.toFixed(2)}`;

    return (
        <ItemList>
            <div>
                <h2>{name}</h2>
                <Summary>
                    <Price>{priceFormatted}</Price>
                    <Amount>x {amount}</Amount>
                </Summary>
            </div>
            <Actions>
                <button onClick={onRemove.bind(null, id)}>−</button>
                <button onClick={onAdd.bind(null, item)}>+</button>
            </Actions>
        </ItemList>
    );
};

export default CartItem;
