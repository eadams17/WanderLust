import React from 'react';
import { Link } from 'react-router-dom';

const guestUser = { email: 'drtobogan@gmail.com', password: 'password' };

const publicNav = (login) => (
  <div className="navbar">
    <Link to="/" className="logo-link">
      <h1 className="logo-text">WanderLust</h1>
    </Link>
    <nav>
      <ul className="login-register-links">
        <li><button onClick={() => login(guestUser)}>Guest</button></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  </div>
);

const privateNav = (currentUser, logout) => (
  <div className="navbar">
    <Link to="/" className="logo-link">
      <h1 className="logo-text">WanderLust</h1>
    </Link>
    <button className='logout' onClick={ logout }>Sign Out</button>
  </div>
);

const Navbar = ({ currentUser, logout, login }) => (
  currentUser ? privateNav(currentUser, logout) : publicNav(login)
);

export default Navbar;
