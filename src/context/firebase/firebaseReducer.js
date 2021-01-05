import {
  ADD_NOTE,
  SHOW_LOADER,
  FETCH_NOTES,
  REMOVE_NOTE,
  UPDATE_NOTE,
  START,
  SUCCESS,
} from '../types';

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [FETCH_NOTES]: (state, { payload }) => ({
    ...state,
    notes: payload,
    loading: false,
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  [UPDATE_NOTE + START]: (state, { payload }) => ({
    ...state,
    notes: state.notes.map((note) => {
      if (note.id !== payload.id) return note;
      return { ...note, loading: true };
    }),
  }),
  [UPDATE_NOTE + SUCCESS]: (state, { payload }) => ({
    ...state,
    notes: state.notes.map((note) => {
      if (note.id !== payload.id) return note;
      return {
        ...payload,
        loading: false,
      };
    }),
  }),
  DEFAULT: (state) => state,
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
