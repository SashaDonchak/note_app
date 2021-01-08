import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import {
  ADD_NOTE,
  FETCH_NOTES,
  REMOVE_NOTE,
  SHOW_LOADER,
  START,
  SUCCESS,
  UPDATE_NOTE,
} from '../types';
import { AuthContext } from '../auth/authContext';

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const { user } = useContext(AuthContext);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(
      `${url}/notes.json${
        user !== null ? `?orderBy="user"&equalTo="${user.uid}"` : ''
      }`
    );

    if (res.data === null) {
      dispatch({ type: FETCH_NOTES, payload: [] });
      return;
    }

    const payload = Object.keys(res.data).map((key) => ({
      ...res.data[key],
      id: key,
    }));

    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
      checked: false,
      loading: false,
      user: user.uid,
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);

      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({
        type: ADD_NOTE,
        payload,
      });
    } catch (error) {
      throw new Error(error.messsage);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  const updateNote = async (note) => {
    const updatedNote = {
      title: note.title,
      date: note.date,
      checked: note.checked,
    };

    dispatch({ type: UPDATE_NOTE + START, payload: note });

    try {
      await axios.put(`${url}/notes/${note.id}.json`, updatedNote);

      dispatch({
        type: UPDATE_NOTE + SUCCESS,
        payload: note,
      });
    } catch (error) {
      throw new Error(error.messsage);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        updateNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseState.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FirebaseState;
