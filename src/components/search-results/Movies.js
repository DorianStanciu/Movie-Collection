import React from 'react'
import MovieItem from './MovieItem';
import Spinner from '../home/Spinner';

const Movies = ({ movies, loading}) => {

    if(loading) {
        return <Spinner />
    }else {
        return (
            <div style={movieStyle}>
                {movies.map(movie => (
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
