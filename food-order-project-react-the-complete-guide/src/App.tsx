import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
            <MainHeader onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export default App;
