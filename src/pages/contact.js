import React from 'react';
import '../../styles/index.scss';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiDandelionFlower } from 'react-icons/gi';

const Contact = () => {
    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper" data-sal="fade" data-sal-duration="1500">
                    <section data-sal="fade-in" className="contact-section">
                        <div className="contact-container">
                            <nav>
                                <ul>
                                    <li> <a href="tel:+1-613-737-3378"><FaPhone aria-hidden="true"/> 613-737-3378</a></li>
                                    <li><a href="mailto:info@ourday.ca"><MdEmail aria-hidden="true"/> info@ourday.ca</a></li>
                                </ul>
                            </nav>
                            <h1 className="contact-header">Please fill out this form and we will get back to you shortly:</h1>
                            <div className="form-container" id="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="contact-advert">
                            <GiDandelionFlower />
                            <p>Contact us to turn your dream into a reality.</p>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Contact;