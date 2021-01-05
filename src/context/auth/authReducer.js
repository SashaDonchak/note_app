import { LOGOUT, SIGNIN, SIGNUP } from '../types';

const handlers = {
  [SIGNUP]: (state) => state,
  [SIGNIN]: (state) => state,
  [LOGOUT]: (state) => state,
  DEFAULT: (state) => state,
};

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
