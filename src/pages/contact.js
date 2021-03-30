import React from 'react';
import { Link } from 'gatsby';
import '../../styles/contact.scss';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
                <h1 className="contact-header">contact us yea?</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
        </Layout>
    )
}

export default Contact;