import React, { useReducer } from 'react';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';


const AuthState = ({ children }) => {

    const initialState = {
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{
            user: state.user
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;