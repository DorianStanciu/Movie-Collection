import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Logo from './favicon.png';
import { Link } from 'react-router-dom';
import Searchbar from './searchbar/Searchbar';
import Axios from 'axios';

class Navbar extends Component {
    state = { 
        movies: [],
        loading: false,
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    searchMovies = async text => {
        const res = await Axios.get(
            `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${text}&page=1`
        );

        this.setState({ movies: res.data.items, loading: false})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <div className='navbar-logo-div'>
                <img src={Logo} id='logo-nav-img'/><h1 className='navbar-logo'></h1>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='searchbar'>
                    <Searchbar searchMovies={this.searchMovies}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;