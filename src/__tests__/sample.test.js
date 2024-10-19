// You can test without using reactjs

import { sum } from "../pages/jsfortesting/sum"

test("Sum testing",()=>{
    const result = sum(6,7)
    //below things we called assertion
    expect(result).toBe(13)

})