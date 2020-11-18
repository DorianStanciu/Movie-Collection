import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import './Home.css';
import Carousel from './carousel/Carousel';
import ApiCall from '../../scripts/api/ApiCall';
import Footer from '../footer/Footer';
import HomeContent from './HomeContent/HomeContent';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar />
                <HomeContent />
                <ApiCall />
                <Footer />
            </div>
        )
    }
}

export default Home;
