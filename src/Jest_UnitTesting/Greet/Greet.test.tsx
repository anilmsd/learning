//Jest will find the test files and run the files if they are 
//1. filename.test.js or filename.test.tsx
//2. files  with .js or tsx suffix inside the " _test_ " folder 
//3. filename.spec.js or filename.spec.tsx


import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";
import React from "react";

//test.only to run only this test and test.skip to skip this test

// test("Checking the name Hello",()=>{
//     render(<Greet/>);
//     const textElement=screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument()
// });

// test("checking props",()=>{
//     render(<Greet name="anil"/>);
//     const textElement=screen.getByText(/hello anil/i);
//     expect(textElement).toBeInTheDocument();
// })

//Grouping multiple test

//Inside describe instead of test we can use "it" also
describe("Grouping multiple tests", () => {
    test("Checking the name Hello", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument()
    });

    //can use either test or it
    //fit similar to test.only
    //xit similar to test.skip
    it("checking props", () => {
        render(<Greet name="anil" />);
        const textElement = screen.getByText(/hello anil/i);
        expect(textElement).toBeInTheDocument();
    })
})