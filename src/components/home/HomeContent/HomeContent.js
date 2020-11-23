import React, { Component } from 'react';
import './HomeContent.css';
import Movies from '../../search-results/Movies';
import Latest from './latest/Latest';

class HomeContent extends Component {
    render() {
        return (
            <div className='homecontent'>
                <Movies />
                <Latest />
            </div>
        )
    }
}

export default HomeContent;
