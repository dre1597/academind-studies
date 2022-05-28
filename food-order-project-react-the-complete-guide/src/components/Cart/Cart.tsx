import { useContext } from 'react';
import CartContext, { Item } from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import {
    Actions,
    ActionsButton,
    ActionsButtonAlt,
    CartItems,
    Total,
} from './CartStyles';

interface Props {
    onCloseCart: () => void;
}

const Cart: React.FC<Props> = ({ onCloseCart }) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item: Item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <CartItems>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    item={item}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </CartItems>
    );

    return (
        <Modal onClick={onCloseCart}>
            {cartItems}
            <Total>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </Total>
            <Actions>
                <ActionsButtonAlt onClick={onCloseCart}>Close</ActionsButtonAlt>
                {hasItems && <ActionsButton>Order</ActionsButton>}
            </Actions>
        </Modal>
    );
};

export default Cart;
