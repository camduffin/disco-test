import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import button from '../images/button.png';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="nav-bar">
                <Link className="main-logo-container" to="/">
                    <div className="our-day-logo">
                        <img src={button} alt=""/>
                    </div>
                    {/* <div className="logo">Our Day</div> */}
                </Link>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    <li className="nav-link"><Link to="/" className="top-link" activeClassName="nav-link-active">Home</Link></li>
                    <li className="nav-link"><Link to="/how" className="top-link"  activeClassName="nav-link-active">How it Works</Link></li>
                    {/* <li  className="nav-link"><Link to="/example" className="top-link"  activeClassName="nav-link-active">Examples</Link></li> */}
                    <li  className="nav-link"><Link to="/pricing" className="top-link"  activeClassName="nav-link-active">Pricing</Link></li>
                    <li className="nav-link"><Link to="/contact" className="top-link"  activeClassName="nav-link-active">Contact</Link></li>
                    <li className="nav-link"><Link to="/blog" className="top-link"  activeClassName="nav-link-active">Blog</Link></li>
                    {/* <li className="mobile-nav-logo">
                        <Link to="/">
                            <div className="our-day-logo2"><GiFlowers/></div>
                            <div className="logo2">Our Day</div>
                        </Link>
                    </li> */}
                </ul>
                <GiHamburgerMenu onClick={() => setOpen(!open)} className="burger"/>
            </nav>
        </div>
    )
}

export default NavBar;