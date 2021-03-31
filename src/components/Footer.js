import React from 'react';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';
import '../../styles/index.scss';

const Footer = () => {
    return (
        <footer>
            <SocialLinks />
            <ContactForm />
            <p>Created By Cam Duffin 2021</p>
        </footer>
    )
}

export default Footer;