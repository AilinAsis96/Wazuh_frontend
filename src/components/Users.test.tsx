// @ts-nocheck
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import Users from './Users';

describe('<Users/>',()=>{
    let component;

    beforeEach(()=>{
        component = render(
        <Users>
        </Users>)
    })

    test('renders its children', ()=>{
        expect(component.container.querySelector('.testDiv')).toBeDefined()
    })

    test('renders its children', ()=>{
        const el= component.getByText('Id')
        expect(el).toHaveClass('sortable')
    })
})

