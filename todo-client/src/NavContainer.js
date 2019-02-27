import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';


const NavContainer = () => (
  <div className="NavContainer">

    <ul>
      <li>
        <button className="NavButton">
          <i className="fa fa-list ">
          </i> <NavLink to="/todos" className="link">Todo List</NavLink>
        </button>
      </li>
      <li>
        <button className="NavButton">
          <i className="fa fa-archive ">
          </i> <NavLink to="/archive" className="link">Archived</NavLink>
        </button>
      </li>
    </ul>
   

  </div>

);

export default NavContainer;