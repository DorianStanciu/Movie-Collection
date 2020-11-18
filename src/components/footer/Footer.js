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
                    <p>Portfolio: <a href=''>dorianstanciu.com</a></p>
                    <p>Phone Number: 07459856818</p>
                </div>
                <div className='footer-right'>
                    <img src={footerLogo}/>
                </div>
            </div>
        )
    }
}
