import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Note from './Note';

const Notes = ({ notes, onRemove }) => {
  if (notes.length === 0) return <small>There are no notes yet</small>;

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames="note" timeout={800}>
          <Note note={note} onRemove={onRemove} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

export default Notes;
