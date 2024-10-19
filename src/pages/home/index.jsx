import React, { useContext } from 'react';
import { Header } from '../Header/header';
import { CartContextItems } from '../../app';
const Home = ({ setCart, cart }) => {
    const { cartItems, setCartItems } = useContext(CartContextItems);
    return <>
        <div>
            <Header setCart={setCart} />
            <h1>
                heading
            </h1>
            <input type="text" placeholder='name' />
            <input type="text" />
            <button>Submit</button>

        </div>
        <button style={{ marginLeft: "10px" }} onClick={() => setCart(val => !val)}>{cart ? "Home" : `Cart ${cartItems?.length}`}</button>
    </>
}
export default Home