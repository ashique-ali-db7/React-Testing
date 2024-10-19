
import React, { useState } from 'react';
import Home from "./pages/home";
import Cart from './pages/Cart/index'
import Search from './pages/Search';
export const UserContext = React.createContext();
export const CartContext = React.createContext("light");
export const CartContextItems = React.createContext([])
const App = () => {
    const [name, setName] = useState("ashique")
    const [cartCount, setCartCount] = useState(14)
    const [cart, setCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    return <UserContext.Provider value={{ name, setName }}>
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            <CartContextItems.Provider value={{ cartItems, setCartItems }}>
                <Home setCart={setCart} cart={cart} />

                {!cart ? <Search /> :
                    <Cart />}
            </CartContextItems.Provider>
        </CartContext.Provider>

    </UserContext.Provider>
}
export default App