import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

const AuthState = ({ children }) => {
  const initialState = {
    user: null,
  };

  const [state] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthState;
