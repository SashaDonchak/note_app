import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import app from '../config';

const Signin = ({ history }) => {
  const handleSignin = async (event) => {
    event.preventDefault();
    const { userEmail, userPassword } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(userEmail.value, userPassword.value);
      history.push('/');
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <form onSubmit={handleSignin}>
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
      <button type="submit" className="btn btn-outline-primary">
        Submit
      </button>
    </form>
  );
};

Signin.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Signin);
