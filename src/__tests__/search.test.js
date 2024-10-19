  import React, { act } from "react";
  import { fireEvent, render, screen } from "@testing-library/react"

  import "@testing-library/jest-dom"
  import Search from "../pages/Search";
  import { mockData } from "../mocks/searchData";

  global.fetch = jest.fn(()=>{
      return Promise.resolve({json:()=>Promise.resolve(mockData)})
  })
  it("Should search list for essence input",async()=>{
    //When you render in real project may be you have to wrap the reacr router and redux 
    await act(async()=> render(<Search/>)) 
    const cardsBeforeSearch = screen.getAllByTestId("card")
    console.log("Cards before search:", cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(30)
    const searchbutton = screen.getByRole("button",{name:"Search"})
    //if you want to get element with test id
    const searchInput = screen.getByTestId("searchInput")
    // Beleow you creating an onchange event that have value 
    // normally event value provide y browser so now we are creating fake event for js dom
    fireEvent.change(searchInput,{target:{value:"Essence"}})
    fireEvent.click(searchbutton)

    const cardsAfterSearch = screen.getAllByTestId("card")
  expect(cardsAfterSearch.length).toBe(1)
  })