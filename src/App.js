import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';
import { Navbar } from './components/Navbar';
import AlertState from './context/alert/AlertState';
import FirebaseState from './context/firebase/FirebaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
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

            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
