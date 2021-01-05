import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {
  const [value, setValue] = useState('');

  const alert = useContext(AlertContext);

  const fireBase = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      setValue('');

      fireBase
        .addNote(value.trim())
        .then(() => {
          alert.show('New note was created', 'success');
        })
        .catch(() => {
          alert.show('Something went wrong', 'danger');
        });
    } else {
      alert.show('Enter note title');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-dark" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
