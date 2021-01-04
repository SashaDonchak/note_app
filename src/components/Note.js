import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Note = ({ note, onRemove }) => {
    const { updateNote } = useContext(FirebaseContext);

    return (
        <li className={`list-group-item note ${note.checked ? 'list-group-item-primary' : ''}`} >
            <div>
                <input type="checkbox" className="mr-3" value="1" checked={note.checked} onChange={() => { updateNote({
                    ...note, checked: !note.checked
                }) }} />
                <strong>
                    {note.title}
                </strong>
                <span>
                    {note.date}
                </span>
            </div>
            <button onClick={() => onRemove(note.id)} className="btn btn-outline-danger btn-sm">
                &times;
            </button>
        </li>
    );
};

export default Note;