import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Note from './Note';

const Notes = ({ notes, onRemove }) => {
    if (notes.length === 0) return <small>There are no notes yet</small>;

    return(
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames="note"
                    timeout={800}
                >
                    <Note note={note} onRemove={onRemove} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Notes;