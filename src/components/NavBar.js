import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="nav-bar">
                <div className="logo">Our Day</div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/blog" className="nav-link">Blog</Link></li>
                </ul>
                <GiHamburgerMenu onClick={() => setOpen(!open)} className="burger"/>
            </nav>
        </div>
    )
}

export default NavBar;