import React, { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';
import { SET_CURRENT_USER, SHOW_LOADER } from '../types';
import app from '../../config';
import { AlertContext } from '../alert/alertContext';

const AuthState = ({ children, history }) => {
  const initialState = {
    user: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const alert = useContext(AlertContext);

  useEffect(() => {
    dispatch({
      type: SHOW_LOADER,
    });
    try {
      app.auth().onAuthStateChanged((user) => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: user,
        });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const signup = async (event) => {
    event.preventDefault();
    const { userEmail, userPassword } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(userEmail.value, userPassword.value);
      history.push('/');
    } catch (error) {
      alert.show(error.message, 'danger');
    }
  };

  const signin = async (event) => {
    event.preventDefault();
    const { userEmail, userPassword } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(userEmail.value, userPassword.value);
      history.push('/');
    } catch (error) {
      alert.show(error.message, 'danger');
    }
  };

  const signout = async () => {
    try {
      await app.auth().signOut();
      history.push('/');
    } catch (error) {
      alert.show(error.message, 'danger');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.element.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(AuthState);
