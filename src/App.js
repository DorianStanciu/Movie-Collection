import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Movies from './components/search-results/Movies';
import axios from 'axios';
import HomeContent from './components/home/HomeContent/HomeContent';

class App extends Component {

  state = {
    movies: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true});

    const res = await axios.get('https://api.github.com/users');

    this.setState({ movies: res.data, loading: false});
  }
  render() {
  return (
    <div>
      <Navbar />
      <Movies loading={this.state.loading} movies={this.state.movies} />
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


