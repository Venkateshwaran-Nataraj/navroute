
import React from 'react';
import { Route,Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import List from './List';

function App() {
  return (
   <>

      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/"
              

              className={(isActive)=>(isActive?'active':'')}
              
              >
              
              
              
              Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"    className={(isActive)=>(isActive?'active':'')}>About</NavLink>
            </li>
            <li>
              <NavLink to="/List"    className={(isActive)=>(isActive?'active':'')}>List</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </div>
  

   
   
   </>
  );
}

export default App;
