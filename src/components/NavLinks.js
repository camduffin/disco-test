import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => {
    return (
        <nav className="top-nav">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </nav>
    )
}

export default NavLinks;