import React from 'react';
import '../../styles/index.scss';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <>
            <SEO title="Contact"/>
            <Layout>
                <main className="wrapper" data-sal="fade" data-sal-duration="1000">
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
                </main>
            </Layout>
        </>
    )
}

export default Contact;