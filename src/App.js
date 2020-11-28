import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Movies from './components/search-results/Movies';
import axios from 'axios';

class App extends Component {
  async componentDidMount(){
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
  }
  render() {
  return (
    <div>
      <Movies />
    </div>
    )
  }
}


export default App;

/* function App() {
  return (
    <Router>
    <Home />
    </Router>
    )
}

*/


