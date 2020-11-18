import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {

render() {
return(
    <div className='searchbar-input'>
<input
type='text'
name='text'
placeholder='Search...'
className='search-input-bar'
/>
<input
type='submit'
value='Search'
className='search-submit'
/>
</div>

)
}
}

export default Searchbar;