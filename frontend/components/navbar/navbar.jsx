import React from 'react';
import { Link } from 'react-router-dom';

const guestUser = { email: 'drtobogan@gmail.com', password: 'password' };

const publicNav = (login) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    <div className="nav-right">
      <button className="guest-login" onClick={() => login(guestUser)}>Guest</button>
      <Link to="/login">
        <p className="sign-in">Sign In</p>
      </Link>
      <Link to="/register">
        <p className="register">Register</p>
      </Link>
    </div>
  </div>
);

const privateNav = (currentUser, logout) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    <div className="nav-right">
      <Link to={`/profile/${currentUser.username}`}>
        <p className="profile-link">Profile</p>
      </Link>
      <Link to="/photos">
        <p className="explore-link">Explore</p>
      </Link>
      <button className='logout' onClick={ logout }>Sign Out</button>
    </div>
  </div>
);

const Navbar = ({ currentUser, logout, login }) => (
  currentUser ? privateNav(currentUser, logout) : publicNav(login)
);

export default Navbar;
