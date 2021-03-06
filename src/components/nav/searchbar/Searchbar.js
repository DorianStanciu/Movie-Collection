import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    state = {
        text: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        }else{
            this.props.searchMovies(this.state.text);
        }
        this.props.searchMovies(this.state.text);
        this.setState({ text: ''});
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

render() {
return(
    <div className='searchbar-input'>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
<input
type='text'
name='text'
placeholder='Search Movies...'
className='search-input-bar'
value={this.state.text}
onChange={this.onChange}
/>
<input
type='submit'
value='Search'
className='search-submit'
/>
</form>
</div>

)
}
}

export default Searchbar;