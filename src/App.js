import React from "react";
//import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/united/bootstrap.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
