import React from 'react';
import SocialLinks from './SocialLinks';
import '../../styles/index.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <aside>
                    <SocialLinks />
                </aside>
                <p>iSiLIVE 2021</p>
            </div>
        </footer>
    )
}

export default Footer;