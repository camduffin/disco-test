import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <Layout>
            <div className="wrapper">
                <section data-sal="fade-in" className="contact-section">
                    <h2 className="contact-header">Contact</h2>
                    <nav>
                        <ul>
                            <li> <a href="tel:+1-613-737-3378"><FaPhone aria-hidden="true"/> 613-737-3378</a></li>
                            <li><a href="mailto:info@ourday.ca"><MdEmail aria-hidden="true"/> info@ourday.ca</a></li>
                        </ul>
                    </nav>
                    <div className="form-container" id="contact-form">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Contact;