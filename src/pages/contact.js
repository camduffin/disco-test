import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <Layout>
            <div className="wrapper">
                <section data-sal="fade-in" className="contact-section">
                    <h2 className="contact-header">Contact</h2>
                    <nav>
                        <ul>
                            <li>Call: 613-242-24444</li>
                            <li><a href="mailto:camduffin@gmail.com">camduffin@gmail.com</a></li>
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