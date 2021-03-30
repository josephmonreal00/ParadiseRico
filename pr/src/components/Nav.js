import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <nav className="Nav">
      <h3>PR</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/portfolio'>
          <li>Portfolio</li>
        </Link>
        <Link style={navStyle} to='/store'>
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;