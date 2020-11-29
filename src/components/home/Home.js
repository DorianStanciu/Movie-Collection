import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import './Home.css';
import Footer from '../footer/Footer';
import HomeContent from './HomeContent/HomeContent';
import axios from 'axios';
import Spinner from './Spinner';

class Home extends Component {

    render() {
        return (
            <div className='home'>
                <HomeContent />
                <Footer />
            </div>
        )
    }
}

export default Home;
