import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import FirebaseState from './context/firebase/FirebaseState';
import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <AlertState>
        <AuthState>
          <FirebaseState>
            <Navbar />
            <div className="container pt-4">
              <Alert />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/account">account</Route>
              </Switch>
            </div>
          </FirebaseState>
        </AuthState>
      </AlertState>
    </BrowserRouter>
  );
}

export default App;
