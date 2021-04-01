import React from 'react';
import '../../styles/index.scss';
import { SiTwitter } from 'react-icons/si';
import { RiFacebookFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <nav>
            <ul className="social-links">
                <li>
                    <a href="https://isilive.ca/?gclid=Cj0KCQjwmIuDBhDXARIsAFITC_59o-GCu67XyuN57T4PjUEd0pMiYkj2EhFhdMmuvuBSC7rSWGueel4aAsIJEALw_wcB" target="_blank" rel="noreferrer noopener"><FaPinterestP/></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/isilivecanada/"><RiFacebookFill/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/isilivecanada/?hl=en"><GrInstagram/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/isilivecanada/?hl=en"><SiTwitter/></a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialLinks;