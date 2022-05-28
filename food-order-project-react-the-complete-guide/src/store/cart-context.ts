import { createContext } from 'react';

export interface Item {
    id: string;
    name: string;
    description?: string;
    price: number;
    amount: number;
}
export interface Cart {
    items: Item[];
    totalAmount: number;
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

export const defaultItem = {
    items: [] as Item[],
    totalAmount: 0,
    addItem: (item: Item) => {},
    removeItem: (id: string) => {},
};

const CartContext = createContext<Cart>(defaultItem);

export default CartContext;
