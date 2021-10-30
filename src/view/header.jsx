import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header>
            <ul>
                <li className="background_red">Encre &amp; Levure</li>
                <li className="background_blue">patiserie</li>
                <li className="background_yellow">cours de patiserie</li>
                <li className="background_green">a propos</li>
            </ul>
        </header>
    );
}

export default Header;
