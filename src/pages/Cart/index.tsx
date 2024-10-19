import React, { useContext } from "react";
import { CartContextItems, UserContext } from "../../app";
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContextItems);
  console.log("eeee", cartItems, setCartItems);
  const RemoveItem = (id) => {
    setCartItems((items) => {
      const newItems = items.filter((item) => item?.id !== id);
      return newItems;
    });
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#f6f6f6",
            width: "300px",
            height: "300px",
            padding: "30px",
            margin: "25px",
          }}
        >
          <p style={{}}>{item?.brand}</p>
          <button onClick={() => RemoveItem(item?.id)}>Remove Item</button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
