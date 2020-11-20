import React, { Component } from 'react';
import './Footer.css';
import footerLogo from './tdmbLogo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-left'>
                    <h2>Movie Collection</h2>
                    <p>Developer: Dorian Stanciu</p>
                    <p>Portfolio: <a href='http://dorianstanciu.com/'>dorianstanciu.com</a></p>
                    <p>Phone Number: 07459856818</p>
                </div>
                <div className='footer-right'>
                    <img src={footerLogo}/>
                    <div className='credits'>
                    <a href='https://twitter.com/themoviedb' target='get_blank'><i class="fab fa-twitter i1"></i></a>
                    <a href='https://www.facebook.com/themoviedb' target='get_blank'><i class="fab fa-facebook-f i2"></i></a>
                    <a href='https://www.themoviedb.org/documentation/api' target='get_blank'><i class="fas fa-code i3"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
