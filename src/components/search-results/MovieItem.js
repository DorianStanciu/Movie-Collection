import React from 'react'
import './MovieItem.css'

const MovieItem = ({movie: {login, avatar_url, html_url}}) => {
        
        return (
            <div class='movie-item'>
                <div className=''>
                    <img src={avatar_url} 
                    alt='' 
                    className='round-img' 
                    style={{ width: '60px'}} 
                    />
                </div>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className=''>More</a>
                </div>
            </div>
        )
}

export default MovieItem
