import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';
import {prettyDOM} from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';


//Verify if the component have a nav selector
test ('renders content', () =>{
    const component = render(<Navbar/>, {wrapper: MemoryRouter})
    const nav = component.container.querySelector('nav')
  })