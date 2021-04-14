import * as React from "react"
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import { Parallax } from 'react-parallax';
import image from '../images/pexels-fox-998521.jpg';

const IndexPage = () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Parallax className="main-image-header" 
        bgImage={image} strength={500} 
        bgImageAlt="A gold wedding band with white diamonds"
        blur={{ min: -15, max: 15 }} 
        >
        <div>
          <div className="about-header-container">
            <div>
              <h1 className='about-header' data-sal="slide-right" data-sal-duration="1000">Creating Unforgettable Memories</h1>
              <h2 data-sal="slide-left" data-sal-duration="1000">www.OurDay.ca</h2>
            </div>
            <button className="down-arrow" data-sal="slide-up" onClick={() => scrollTo('#about-content')}><HiOutlineArrowNarrowDown aria-label="Scroll Down"/></button>
          </div>
        </div>
        </Parallax>
        <section className="about-section" id="about-content" data-sal="fade" data-sal-duration="1000">
          <div className="wrapper">
            <h2>About Us</h2>
            <p>We are here to help you turn your day into ourday!</p>
            <p className="paragraph">At iSiLIVE, we pride ourselves in developing innovative webcasting solutions for all kinds of occasions. We broadcast a wide spectrum of events each year - often on short timelines - so just let us know what, when and where and we will work with you to share your event with the right people.</p>
            <p><Link className="message-link" to="/contact">Contact us</Link>today for questions or quotes.</p>
          </div>
        </section>
      </Layout>
    </>
  )

}

export default IndexPage;