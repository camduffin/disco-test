import * as React from "react"
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const IndexPage = (data) => {

  return (
    <>
    <SEO title="Home" />
      <Layout>
        <div className="main-image-header" data-sal="fade-in" data-sal-easing="ease" data-sal-delay="100">
          <div className="about-header-container">
            <div>
              <h1 className='about-header'>Creating Unforgettable Memories</h1>
              <h2>www.OurDay.ca</h2>
            </div>
            <button className="down-arrow" onClick={() => scrollTo('#about-content')}><HiOutlineArrowNarrowDown/></button>
          </div>
        </div>

        <section className="about-section" id="about-content">
          <div className="wrapper">
            <h2>About Us</h2>
            <p>We are here to help you turn your day into ourday!</p>
            <p className="paragraph">At iSiLIVE, we pride ourselves in developing innovative webcasting solutions for all kinds of occasions. We broadcast a wide spectrum of events each year - often on short timelines - so just let us know what, when and where and we will work with you to share your event with the right people.</p>
            <p><Link className="message-link" to="/contact">Contact us</Link>today for questions or quotes. </p>
          </div>
        </section>
      </Layout>
    </>
  )

}

export default IndexPage;