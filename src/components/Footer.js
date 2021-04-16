import React from 'react';
import SocialLinks from './SocialLinks';
import '../../styles/index.scss';
import logo from '../images/isi-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="address" data-sal="fade" data-sal-duration="1500">
                    <p>150 C Terence</p>
                    <p>Matthews Cres</p>
                    <p>Ottawa, ON K2M1X4</p>
                </div>
                <span aria-hidden="true"></span>
                <div className="copyright" data-sal="fade" data-sal-duration="1500">
                    <p>Presented By</p>
                    <a href="https://isilive.ca/" target="_blank" rel="noreferrer noopener">
                        <img className="isi-logo" src={logo} alt="iSiLIVE logo"/>
                    </a>
                </div>
                <div className="phone" data-sal="fade" data-sal-duration="1500">
                    <a href="tel:613.737.3378">Tel: 613.737.3378</a>
                    <a href="mailto:info@ourday.ca">info@ourday.ca</a>
                </div>
                <span aria-hidden="true"></span>
                <nav data-sal="fade" data-sal-duration="1500">
                    <SocialLinks />
                </nav>
            </div>
            <div className="copyright-bottom" data-sal="fade" data-sal-duration="1500">
                <p>© 2021 OurDay.ca</p>
            </div>
        </footer>
    )
}

export default Footer;