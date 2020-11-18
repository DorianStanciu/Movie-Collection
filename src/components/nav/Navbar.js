import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Logo from './favicon.png';
import { Link } from 'react-router-dom';
import Searchbar from './searchbar/Searchbar';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
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
                    <Searchbar />
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