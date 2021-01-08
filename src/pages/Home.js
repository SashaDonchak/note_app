import React, { Fragment, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../components/Form';
import Notes from '../components/Notes';
import Loader from '../components/Loader';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { AuthContext } from '../context/auth/authContext';
// import { AlertContext } from '../context/alert/alertContext';

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );

  const { user } = useContext(AuthContext);

  // const alert = useContext(AlertContext);

  useEffect(() => {
    fetchNotes();

    // eslint-disable-next-line
  }, [])

  const getRedirect = () => {
    if (user !== null) return false;
    // alert.show('Sign in to use this app.', 'warning');
    return <Redirect to="/signin" />;
  };

  return (
    <>
      {getRedirect()}
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  );
};

export default Home;
