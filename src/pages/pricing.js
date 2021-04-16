import React from 'react';
import Layout from '../components/Layout';
import '../../styles/index.scss';
import SEO from '../components/SEO';
// import champagneImage from '../images/champagne.jpg';
// import glassImage from '../images/glasses.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const PricingPage = () => {

    const champagneImage = '../images/champagne.jpg';
    const glassImage = '../images/glasses.jpg';

    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper" data-sal="fade" data-sal-duration="1000">
                    <section className="pricing-section">
                        <div className="pricing-text-container">
                            <h1>Pricing</h1>
                            <p>Your event is special. We pride ourselves on creating innovative solutions. As such, iSiLIVE offers specific quotes for your specific event. 
                            There is typically a 3 hour minimum charge to cover things such as travel time, site visit, testing, set up and tear down. That is a minimum $1,500.00.</p>
                        </div>
                        <div className="pricing-image-container" data-sal="fade" data-sal-duration="3000">
                            {/* <img src={champagneImage} alt=""/>
                            <img src={glassImage} alt=""/> */}
                            <StaticImage src={champagneImage} alt="champagne" placeholder="blurred"/>
                            <StaticImage src={glassImage} alt="glasses" placeholder="blurred"/>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default PricingPage;