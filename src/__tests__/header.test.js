import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "../pages/Header/header"
import "@testing-library/jest-dom"
import { mockList } from "../mocks/listdata";


it ("shuold load Header component with login button",()=>{
// render

render(<Header/>)

// render(
// if you are using anything otherethan ract you have to wrap to render
// <BrowserRouter>
//<Provider store={store}> 
//<Header/>
// </Provider>
// </BrowserRouter>
// )
//Querying specifically finding item
const loginbutton = screen.getByRole("button",{name:"Mens"})
//Assertion
expect(loginbutton).toBeInTheDocument()
})

it ("shuold cart item 14",()=>{
    // render
    
    render(<Header/>)
//Query   you can also use regex also Cart 12
    const cartItems = screen.getByText("Cart undefined")
    //Assertion
    expect(cartItems).toBeInTheDocument()
    })

   
it ("should change login button to logout  on click",()=>{
   
    
    render(<Header/>)

    const loginButton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument()
    })
    // Checking props datat showing or not
    it("Should render header with props data",()=>{
        render(<Header name={mockList.name} age={mockList.age}/>)

      const name =   screen.getByText("Ashique Ali")
      expect(name).toBeInTheDocument()
    })