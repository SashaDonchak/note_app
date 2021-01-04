import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
        </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        exact
                        className="nav-link"
                        to="/"
                    >
                        Home
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about"
                    >
                        About
                </NavLink>
                </li>
            </ul>
            <NavLink 
                className="btn btn-light my-2 my-sm-0 btn-login"
                type="button"
                to="/login"
            >
                Login
            </NavLink>
        </nav>
    )
};