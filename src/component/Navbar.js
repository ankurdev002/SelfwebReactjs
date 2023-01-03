import React from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='overnav'>
      <nav>
    
    <img src={logo} className="logo" />
    <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/about'>ABOUT</NavLink></li>
        <li><NavLink to='/portfolio'>PORTFOLIO</NavLink></li>
        <li><NavLink to='/services'>SERVICES</NavLink></li>
        <li><NavLink to='/hireme'>HIRE ME</NavLink></li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar;