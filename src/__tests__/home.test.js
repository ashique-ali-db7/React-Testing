import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/home";
import "@testing-library/jest-dom";
//If you want to do anything before running all test cases
beforeAll(() => {
  // console.log("before all");
});
//If you want to do anything before running each test cases
beforeEach(() => {
  // console.log("before each");
});
//If you want to do anything after running all test cases
afterAll(() => {
  // console.log("After all");
});
//If you want to do anything after running each test cases
afterEach(() => {
  // console.log("After Each");
});
// This is basci of testing you render something query something aseert something every test you have to do this

// you can group your test cases by using describe
describe("Home page test cases", () => {
  //you can also it instead of test so the senntence become it should load home component it make sense
  it("Should load home component", () => {
    //Rendering to js dom
    render(<Home />);
    //querying the role can be heading ,button,placeholder ,text etc..
    const heading = screen.getByRole("heading");
    //Assertion
    // here it checking that is there any heading rendered or not
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside home component", () => {
    //Rendering to js dom
    render(<Home />);

    const button = screen.getByRole("button", { name: "Submit" });
    const alsoButton = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
    expect(alsoButton).toBeInTheDocument();
  });

  test("Should load input name inside home component", () => {
    //Rendering to js dom
    render(<Home />);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input or not inside home component", () => {
    //Rendering to js dom
    render(<Home />);
    //Querying  here inputBoxes is nothing but virtual dom or javascript object
    //when we have multiple items use All
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
