import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Search from "../pages/Search";
import { mockData } from "../mocks/searchData";
import Cart from "../pages/Cart";
import { CartContextItems } from "../app";
import Home from "../pages/home";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockData),
  });
});
const mockCartItems = [{ id: 1, brand: "Essence" }];
const mockSetCartItems = jest.fn(); // A mock function to simulate setCartItems
it("should load product component", async () => {
  await act(async () =>
    render(
      <CartContextItems.Provider
        value={{ cartItems: mockCartItems, setCartItems: mockSetCartItems }}
      >
        <Home />
        <Search />
      </CartContextItems.Provider>
    )
  );
  //   const product = screen.getByText("Essence");
  const addBtns = screen.getAllByRole("button", { name: "Add to cart" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByRole("button", { name: "Cart 1" }));
});
