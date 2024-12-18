




import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">QuickRent</h1>

        <ul className="navbar-links">
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/gadget-listing">Gadgets</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="auth-buttons">
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
