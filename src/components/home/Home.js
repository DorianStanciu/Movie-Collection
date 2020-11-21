import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import './Home.css';
import Carousel from './carousel/Carousel';
import Footer from '../footer/Footer';
import HomeContent from './HomeContent/HomeContent';
import axios from 'axios';

class Home extends Component {
    /*
    async componentDidMount() {

        //this.setState({ loading: true});

        const res = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
        console.log(res.data);
    }


    */

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
