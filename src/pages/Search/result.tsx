import React from "react";
import { CartContextItems } from "../../app";
import { useContext } from "react";
const Result = ({ searchResult }) => {
  const { setCartItems, cartItems } = useContext(CartContextItems);
  const addToCart = (data) => {
    setCartItems((items) => {
      const isBrand = items?.some((item) => item?.brand === data?.brand);

      if (!isBrand) {
        return [...items, data];
      }
      alert("Item already Exist");
      return items;
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Ensures cards wrap to the next row if necessary
          gap: "10px", // Adds space between the cards
          justifyContent: "space-between", // Distributes cards evenly in a row
        }}
      >
        {searchResult?.map((data, idx) => {
          return (
            <div
              key={idx}
              data-testid="card"
              style={{
                background: "#f6f6f6",
                width: "300px",
                height: "300px",
                marginBottom: "10px",
              }}
            >
              <h1>{data?.brand}</h1>

              <button onClick={() => addToCart(data)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Result;
