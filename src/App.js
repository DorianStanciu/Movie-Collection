import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Movies from './components/search-results/Movies';
import axios from 'axios';
import HomeContent from './components/home/HomeContent/HomeContent';
import Searchbar from './components/nav/searchbar/Searchbar';
import Alert from './components/nav/searchbar/Alert';

class App extends Component {

  state = {
    movies: [],
    loading: false,
    alert: null
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg,type }});
}

  render() {
  return (
    <Router>
      <div className='app'>
      <Switch>
        <Route exact path='/' render={} />
      </Switch>
      </div>
    </Router>
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

<Movies loading={this.state.loading} movies={this.state.movies} />

*/


