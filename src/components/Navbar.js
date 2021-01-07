import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="navbar navbar-light navbar-expand-lg"
    style={{ backgroundColor: '#e3f2fd' }}
  >
    <div className="navbar-brand">Note App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </ul>

    <ul className="navbar-nav auth">
      <li className="nav-item">
        <NavLink
          className="btn btn-light nav-link my-2 my-sm-0"
          type="button"
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link my-2 my-sm-0" type="button" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
