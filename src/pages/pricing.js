import React from 'react';
import Layout from '../components/Layout';
import '../../styles/pricing.scss';

const PricingPage = () => {
    return (
        <Layout>
            <main className="wrapper" data-sal="fade-in" data-sal-easing="ease" data-sal-delay="100">
                <section className="pricing-section">
                    <h2>Pricing</h2>
                    <p>Your event is special. We pride ourselves on creating innovative solutions. As such, iSiLIVE offers specific quotes for your specific event. 
                    There is typically a 3 hour minimum charge to cover things such as travel time, site visit, testing, set up and tear down. That is a minimum $1,500.00.</p>
                </section>
            </main>
        </Layout>
    )
}

export default PricingPage;