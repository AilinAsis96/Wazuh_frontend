// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';

import Tasks from './components/Tasks';
import Users from './components/Users';



function App(){
  return(
   <Router>
    <Navbar/>
    <div className='container p-4'>
      <Routes>
      <Route path='/' element={<About/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/task' element={<Tasks/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App;
