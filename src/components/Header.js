import React from 'react';
import NavLinks from '../components/NavLinks';

const Header = () => {
    return (
        <header>
            <h3 className="our-day-logo">Our Day</h3>
            <p>this is a header</p>
            <NavLinks />
        </header>
    )
}

export default Header;