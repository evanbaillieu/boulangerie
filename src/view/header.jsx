import React from 'react';
import logo from '../img/logo.svg'
import './header.css'

const Header = () => {
    return (
        <header>
            <ul>
                <img src={logo} alt="logo" className="logo" />
                <li className="background_red">encre &amp; levure</li>
                <li className="background_blue">nos patiserie</li>
                <li className="background_yellow">cours de patiserie</li>
                <li className="background_green">a propos</li>
            </ul>
        </header>
    );
}

export default Header;
