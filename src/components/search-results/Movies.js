import React, { Component } from 'react'
import MovieItem from './MovieItem';

class Movies extends Component {
    state = {
        movies: [
            {
                id: 'id',
                login: 'mojombo1',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: 'id',
                login: 'mojombo2',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: 'id',
                login: 'mojombo3',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            }

        ]
    }

    render() {
        return (
            <div style={movieStyle}>
                {this.state.movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        )
    }
}

const movieStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Movies
