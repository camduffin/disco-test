import React from 'react';
import '../../styles/index.scss';
import { SiTwitter } from 'react-icons/si';
import { RiFacebookFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialLinks = () => {
    return (
        <nav>
            <ul className="social-links">
                <li>
                    <a href="https://www.linkedin.com/company/isilive/?originalSubdomain=ca" target="_blank" rel="noreferrer noopener"><AiFillLinkedin aria-hidden="true"/></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/isilivecanada/" target="_blank" rel="noreferrer noopener"><RiFacebookFill aria-hidden="true"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/isilivecanada/?hl=en" target="_blank" rel="noreferrer noopener"><GrInstagram aria-hidden="true"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/isilivecanada/?hl=en" target="_blank" rel="noreferrer noopener"><SiTwitter aria-hidden="true"/></a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialLinks;