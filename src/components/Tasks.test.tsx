// @ts-nocheck
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import Tasks from './Tasks';

describe('<Tasks/>',()=>{
    let component;

    beforeEach(()=>{
        component = render(
        <Tasks>
            <div className="testDiv">testDivContent</div>
        </Tasks>)
    })

    test('renders its children', ()=>{
        expect(component.container.querySelector('.testDiv')).toBeDefined()
    })

    test('renders its children', ()=>{
        const el= component.getByText('Id')
        expect(el).toHaveClass('sortable')
    })
})

