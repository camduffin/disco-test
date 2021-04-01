import React from 'react';
import SocialLinks from './SocialLinks';
import '../../styles/index.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="address">
                <p>150 C Terence</p>
                <p>Matthews Cres</p>
                <p>Ottawa, ON K2M1X4</p>
            </div>
            <span></span>
            <div className="phone">
                <p>Tel: 613.737.3378</p>
                <a href="mailto:info@ourday.ca">info@ourday.ca</a>
            </div>
            <span></span>
            <div className="copyright">
                <p>© 2021 by OurDay.ca</p>
                <p>Presented By</p>
                <a href="https://isilive.ca/" target="_blank" rel="noreferrer noopener">www.isilive.ca</a>
            </div>
                <nav>
                    <SocialLinks />
                </nav>
            </div>
        </footer>
    )
}

export default Footer;