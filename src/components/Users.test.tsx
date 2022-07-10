// @ts-nocheck
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import Users from './Users';

describe('<Users/>',()=>{
    let component;

    test("renders content", () => {

        const component = render(<Users/>);
      });
})

