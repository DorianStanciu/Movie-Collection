import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
    )
}


export default App;
