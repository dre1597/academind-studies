import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import { Badge, CartButton, Icon } from './LayoutStyles';

interface Props {
    onClick: () => void;
}

const HeaderCartButton: React.FC<Props> = ({ onClick }) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    return (
        <CartButton onClick={onClick}>
            <Icon>
                <CartIcon />
            </Icon>
            <span>Your Cart</span>
            <Badge>{numberOfCartItems}</Badge>
        </CartButton>
    );
};

export default HeaderCartButton;
