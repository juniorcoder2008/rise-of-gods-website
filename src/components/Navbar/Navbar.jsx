import React from 'react';

import logo from '../../assets/logo.svg';
import './Navbar.sass';

const Navbar = () => {
  return (
    <div id='navbar'>
      <img src={logo} alt="Rise of Gods" />

      <ul className="nav">
        <li className="nav-item"><a href="#hero">Spielinfo</a></li>
        <li className="nav-item"><a href="#about">Über uns</a></li>
        <li className="nav-item"><a href="#discord">Discord Server</a></li>
      </ul>
    </div>
  )
}

export default Navbar