import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Note = ({ note, onRemove }) => {
  const { updateNote } = useContext(FirebaseContext);

  return (
    <li
      className={`list-group-item note ${
        note.checked ? 'list-group-item-primary' : ''
      } ${note.loading ? 'disabled' : ''}`}
    >
      <div>
        <input
          type="checkbox"
          className="mr-3"
          value="1"
          checked={note.checked}
          onChange={() => {
            updateNote({
              ...note,
              checked: !note.checked,
            });
          }}
        />
        <strong>{note.title}</strong>
        <span>{note.date}</span>
      </div>
      <button
        type="button"
        onClick={() => onRemove(note.id)}
        className="btn btn-outline-danger btn-sm"
      >
        &times;
      </button>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Note;
