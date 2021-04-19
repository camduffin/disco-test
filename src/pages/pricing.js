import React from 'react';
import Layout from '../components/Layout';
import '../../styles/index.scss';
import SEO from '../components/SEO';
import partyBalloons from '../images/party-balloons.jpg';
import cake from '../images/cake.jpg';
import sparkle from '../images/sparkle.jpg';
import { Parallax } from 'react-parallax';
import { Link } from 'gatsby';


const PricingPage = () => {

    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper">
                    <section className="pricing-section">
                        <Parallax 
                        className="pricing-background"
                        bgImage={sparkle}
                        strength={500} 
                        bgImageAlt="A gold wedding band with white diamonds"
                        blur={{ min: -15, max: 15 }}
                        >
                            <h1 data-sal="fade" data-sal-duration="3000">Pricing</h1>
                        </Parallax>
    
                        <div className="pricing-text-container" data-sal="fade" data-sal-duration="3000">
                            <p>Your event is special. We pride ourselves on creating innovative solutions. As such, iSiLIVE offers specific quotes for your specific event. 
                            There is typically a 3 hour minimum charge to cover things such as travel time, site visit, testing, set up and tear down. That is a minimum $1,500.00.</p>

                            <div className="pricing-button" data-sal="fade" data-sal-duration="3000">
                                <Link to="/contact">Contact us about pricing</Link>
                            </div>
                        </div>

                        <Parallax 
                        className="pricing-background-two"
                        bgImage={partyBalloons}
                        strength={500} 
                        bgImageAlt="A gold wedding band with white diamonds"
                        blur={{ min: -15, max: 15 }}
                        >
                        </Parallax>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default PricingPage;