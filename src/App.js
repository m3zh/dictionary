import React from "react";
//import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/united/bootstrap.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
