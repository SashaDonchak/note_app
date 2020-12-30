import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Notes = ({ notes, onRemove }) => {
    if (notes === null) return;
    
    return(
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames="note"
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div>
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
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Notes;