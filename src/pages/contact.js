import React from 'react';
import '../../styles/contact.scss';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <section data-sal="fade-in" className="contact-section">
                <h2 className="contact-header">Contact</h2>
                <nav>
                    <ul>
                        <li>Call: 613-242-24444</li>
                        <li><a href="mailto:camduffin@gmail.com">camduffin@gmail.com</a></li>
                        <li>Or send us a message below!</li>
                    </ul>
                </nav>
            </section>
        </Layout>
    )
}

export default Contact;