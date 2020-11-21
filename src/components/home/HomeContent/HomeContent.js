import React, { Component } from 'react';
import './HomeContent.css';
import Movies from '../../search-results/Movies';

class HomeContent extends Component {
    render() {
        return (
            <div className='homecontent'>
                <Movies />
            </div>
        )
    }
}

export default HomeContent;
