import React, { Component } from 'react'
import './MovieItem.css'

class MovieItem extends Component {

    render() {

        const { login, avatar_url, html_url } = this.props.movie;
        
        return (
            <div class='movie-item'>
                <div className=''>
                    <img src={avatar_url} alt='' className='round-img' style={{ width: '60px'}} />
                </div>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className=''>More</a>
                </div>
            </div>
        )
    }
}

export default MovieItem
