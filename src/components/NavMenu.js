import React, { useState } from 'react';
import logo from './../images/logo.svg'
import './../css/navmenu.css';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div className="navmenu">
      <nav className="navmenu-container">
        <div className="navmenu-logo-container">
          <img src={logo} className="navmenu-logo"></img>
          <h1>Jaskaran</h1>
        </div>
        
        <ul className="navmenu-links-container">
          <li>
            <NavLink to='/' exact className="navlink" activeClassName="selected">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to='/about' className="navlink" >About</NavLink>
          </li>
          <li>
            <NavLink to='/projects' className="navlink" activeClassName="selected">Projects</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className="navlink" activeClassName="selected">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}