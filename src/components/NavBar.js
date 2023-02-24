import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Yrityksen Nimi</Link>
      </div>
      <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
        <Link to="/" onClick={toggleMenu}>Etusivu</Link>
        <Link to="/puhelintuki" onClick={toggleMenu}>Puhelintuki</Link>
        <Link to="/tietokonetuki" onClick={toggleMenu}>Tietokonetuki</Link>
        <Link to="/tulostintuki" onClick={toggleMenu}>Tulostintuki</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={isOpen ? 'line line-1 active' : 'line line-1'}></div>
        <div className={isOpen ? 'line line-2 active' : 'line line-2'}></div>
        <div className={isOpen ? 'line line-3 active' : 'line line-3'}></div>
      </div>
    </nav>
  );
}

export default Navbar;
