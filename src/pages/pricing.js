import React from 'react';
import Layout from '../components/Layout';
import '../../styles/index.scss';
import SEO from '../components/SEO';
import champagneImage from '../images/champagne.jpg';
import glassImage from '../images/glasses.jpg';

const PricingPage = () => {
    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper" data-sal="slide-right" data-sal-duration="1000">
                    <section className="pricing-section">
                        <div className="pricing-text-container">
                            <h1>Pricing</h1>
                            <p>Your event is special. We pride ourselves on creating innovative solutions. As such, iSiLIVE offers specific quotes for your specific event. 
                            There is typically a 3 hour minimum charge to cover things such as travel time, site visit, testing, set up and tear down. That is a minimum $1,500.00.</p>
                        </div>
                        <div className="pricing-image-container">
                            <img src={champagneImage} alt=""/>
                            <img src={glassImage} alt=""/>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default PricingPage;