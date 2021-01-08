import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth/authContext';

const Signin = () => {
  const { signin } = useContext(AuthContext);
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={signin} className="mt-3">
        <div className="form-group">
          <label htmlFor="userEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password</label>
          <input type="password" className="form-control" id="userPassword" />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
        <div className="mt-3">
          Don&apos;t have an account?&nbsp;
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </form>
    </>
  );
};

export default Signin;
