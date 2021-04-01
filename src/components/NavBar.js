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
                    <li className="nav-link"><Link to="/" className="top-link" activeClassName="nav-link-active">Home</Link></li>
                    <li className="nav-link"><Link to="/contact" className="top-link"  activeClassName="nav-link-active">Contact</Link></li>
                    <li className="nav-link"><Link to="/blog" className="top-link"  activeClassName="nav-link-active">Blog</Link></li>
                    <li className="nav-link"><Link to="/how" className="top-link"  activeClassName="nav-link-active">How it Works</Link></li>
                    <li  className="nav-link"><Link to="/pricing" className="top-link"  activeClassName="nav-link-active">Pricing</Link></li>
                </ul>
                <GiHamburgerMenu onClick={() => setOpen(!open)} className="burger"/>
            </nav>
        </div>
    )
}

export default NavBar;