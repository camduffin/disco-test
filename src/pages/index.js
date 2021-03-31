import * as React from "react"
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { TiArrowDown } from 'react-icons/ti';

const IndexPage = () => {

  return (
      <Layout>
        <div className="main-image-header" data-sal="fade-in" data-sal-easing="ease" data-sal-delay="100">
          <div className="about-header-container">
            <h1 className='about-header'>Our Day</h1>
            <button className="down-arrow" onClick={() => scrollTo('#content')}><TiArrowDown/></button>
          </div>
        </div>
      
        <div className="wrapper" id="content">
          <h2>About Us</h2>
          <p>We are here to help you turn your day into ourday!</p>
          <p className="paragraph">At iSiLIVE, we pride ourselves in developing innovative webcasting solutions for all kinds of occasions. We broadcast a wide spectrum of events each year - often on short timelines - so just let us know what, when and where and we will work with you to share your event with the right people.</p>
          <p>Contact us today for questions or quotes, or leave a message below!</p>
        </div>
      </Layout>
  )

}

export default IndexPage;