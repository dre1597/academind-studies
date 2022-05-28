import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import { Description, Meal, Price } from './MealItemStyles';

interface Props {
    id: string;
    name: string;
    description: string;
    price: number;
}

const MealItem: React.FC<Props> = ({ id, name, description, price }) => {
    const cartCtx = useContext(CartContext);
    const formattedPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id,
            name,
            amount,
            price,
        });
    };
    return (
        <Meal>
            <div>
                <h3>{name}</h3>
                <Description>{description}</Description>
                <Price>{formattedPrice}</Price>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </Meal>
    );
};

export default MealItem;
