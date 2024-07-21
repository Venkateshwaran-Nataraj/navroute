
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/List">List</NavLink>
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
