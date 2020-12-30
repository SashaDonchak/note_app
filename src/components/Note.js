import React, { useState } from 'react';

const Note = ({ note, onRemove }) => {
    const [checked, setChecked] = useState(false);

    return (
        <li className={`list-group-item note ${checked ? 'list-group-item-primary' : ''}`} >
            <div>
                <input type="checkbox" className="mr-3" value="1" checked={checked} onChange={() => {setChecked(!checked)}} />
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