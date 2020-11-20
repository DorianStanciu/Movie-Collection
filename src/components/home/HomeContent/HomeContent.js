import React, { Component } from 'react';
import './HomeContent.css';
import MovieItem from '../../search-results/MovieItem';

class HomeContent extends Component {
    render() {
        return (
            <div className='homecontent'>
                <MovieItem />
            </div>
        )
    }
}

export default HomeContent;
