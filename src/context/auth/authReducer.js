import { SET_CURRENT_USER, SHOW_LOADER, HIDE_LOADER } from '../types';

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [SET_CURRENT_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false,
  }),
  DEFAULT: (state) => state,
};

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
