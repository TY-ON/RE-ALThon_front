// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../png/logoset.png';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li className="nav-logo">
            <Link to="/">
              <img src={logo.src} alt="Logo" className="logoimage" />
            </Link>
          </li>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/custom">Custom</Link></li>
          <li><Link to="/my-page">My Page</Link></li>
        </ul>
      </nav> 
    </header>
  );
}

export default Header;

