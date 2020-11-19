import React, { Component } from 'react';
import axios from 'axios';

class ApiCall extends Component {
    async componentDidMount() {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=16d67da36aba8ccdd5cef14c89ecb3af');
        console.log(res.data);
    }
    render() {
    return(
        <div className=''>

        </div>
    )
    }
}

export default ApiCall;

// https://api.themoviedb.org/3/movie/550?api_key=16d67da36aba8ccdd5cef14c89ecb3af