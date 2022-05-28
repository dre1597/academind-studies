import { useReducer } from 'react';
import CartContext, { Item } from './cart-context';

const defaultCartState = {
    items: [] as Item[],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
};

enum ActionTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

interface CartState {
    items: Item[];
    totalAmount: number;
}

interface CartAction {
    type: ActionTypes;
    payload: any;
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
    if (action.type === ActionTypes.ADD) {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount =
            state.totalAmount + action.payload.price * action.payload.amount;

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload);
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    if (action.type === ActionTypes.REMOVE) {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(
                (item) => item.id !== action.payload
            );
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider: React.FC = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item: Item) => {
        dispatchCartAction({ type: ActionTypes.ADD, payload: item });
    };

    const removeItemToCartHandler = (id: any) => {
        dispatchCartAction({ type: ActionTypes.REMOVE, payload: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
