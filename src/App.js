import React from "react";
//import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import CharPage from './components/CharPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/united/bootstrap.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/word/:id">
            <CharPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
