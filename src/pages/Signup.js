import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth/authContext';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={signup} className="mt-3">
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
          Already have an account?&nbsp;
          <NavLink to="/signin">Sign In</NavLink>
        </div>
      </form>
    </>
  );
};

export default Signup;
