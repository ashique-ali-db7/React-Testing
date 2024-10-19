import React, { useState } from 'react';
import { useContext } from "react";
import { CartContext, CartContextItems } from '../../app';




export const Header = ({ name, age, setCart }) => {
    const [isLogin, setLogin] = useState(false)
    const { cartItems } = useContext(CartContextItems);
    const { cartCount, setCartCount } = useContext(CartContext);
    return <div style={{ background: "#f0f0f0", display: "flex", height: "100px", justifyContent: "space-around" }}>
        <div>{name}</div>
        <div>{age}</div>
        <button style={{ marginLeft: "auto" }}>Home </button>
        <button style={{ marginLeft: "auto", cursor: "pointer" }} onClick={() => { return setCartCount(prve => prve + 1) }}>Mens </button>
        <button style={{ marginLeft: "auto" }}>{`Cart ${cartCount}`} </button>
        <button style={{ marginLeft: "auto" }} onClick={() => setLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</button>

    </div>
}