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
                            <li><FaPhone/> 613-242-24444</li>
                            <li><a href="mailto:info@ourday.ca"><MdEmail/> info@ourday.ca</a></li>
                        </ul>
                    </nav>
                    <div className="form-container">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Contact;