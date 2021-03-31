import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiFlowers } from 'react-icons/gi';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="nav-bar">
                <Link to="/">
                    <div className="our-day-logo"><GiFlowers/></div>
                </Link>
                <div className="logo">Our Day</div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    <li><Link to="/" className="nav-link" activeClassName="nav-link-active">Home</Link></li>
                    <li><Link to="/contact" className="nav-link" activeClassName="nav-link-active">Contact</Link></li>
                    <li><Link to="/blog" className="nav-link" activeClassName="nav-link-active">Blog</Link></li>
                    <li><Link to="/how" className="nav-link" activeClassName="nav-link-active">How it Works</Link></li>
                    <li><Link to="/pricing" className="nav-link" activeClassName="nav-link-active">Pricing</Link></li>
                </ul>
                <GiHamburgerMenu onClick={() => setOpen(!open)} className="burger"/>
            </nav>
        </div>
    )
}

export default NavBar;