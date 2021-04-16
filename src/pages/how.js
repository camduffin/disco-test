import React from 'react';
import '../../styles/index.scss';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Parallax } from 'react-parallax';
import flowerBG from '../images/flower-background.jpg';

const HowPage = () => {
    return (
        <>
            <SEO />
            <Layout>
                <Parallax className="main-image-header" 
                bgImage={flowerBG} strength={500} 
                bgImageAlt="A gold wedding band with white diamonds"
                blur={{ min: -15, max: 15 }} 
                >
                <main className="wrapper how-main" data-sal="fade" data-sal-duration="1000">
                    <section className="how-section">
                        <h1>How it Works</h1>
                        <p>First, tell us about your event! This allows us to figure out your requirements. (Such as how many cameras and microphones are needed, what time frames, are there multiple livestream locations, etc.) We then prepare a quote tailored to your event.</p>
                        <p>Before your day, we perform an onsite visit with testing for a no surprises livestream. For your day, we set up as early as possible, and along with any broadcast staff onsite, there's technicians monitoring the feed remotely to ensure your broadcast goes smoothly. (Our onsite staff dress well, wear masks and adhere to Covid19 guidelines.)</p>
                        <p>The livestream video window is embedded to your website - we can provide you with a page, or work with yours - with a countdown clock on it. We provide you with an invitation link to send your invited guests. We handle the hosting and streaming.</p>
                        <p>An internet signal is our key requirement. We can provide power and wifi, as long as we have internet access.</p>
                    </section>
                </main>
                </Parallax>
            </Layout>
        </>
    )
}
export default HowPage;