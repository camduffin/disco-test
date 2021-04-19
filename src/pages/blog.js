import React from 'react';
import Layout from '../components/Layout';
import '../../styles/index.scss';
import balloonImage from '../images/balloons.jpg';
import fireworksImage from '../images/fireworks.jpg';
import SEO from '../components/SEO';
import { Link } from 'gatsby'; 
// import { StaticImage } from 'gatsby-plugin-image';


const Blog = () => {

    // const balloonImage = '../images/balloons.jpg';
    // const fireworksImage = '../images/fireworks.jpg';

    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper">
                    <section className="blog-section">
                        <h1 className="blog-header">Blog</h1>
                        <div className="blog-container1">
                            <div className="blog-text-container1" >
                                <h3>Hosting a backyard wedding during Covid </h3>
                                <h4>April 1st, 2021</h4>
                                <p data-sal="fade" data-sal-duration="1500">In the strange summer of 2019, my Cousin and his lovely Fiance were engaged to be married. The couple had already planned it, booked it, sent out the Save-The-Dates and then, like so many couples around the world, they found their plans had changed and they had to either wait or get a lot more creative.</p> 

                                <p data-sal="fade" data-sal-duration="1500">Coming from a culture that celebrates marriage with large gatherings of extended family, Cousin faced a unique challenge. Webcasting their wedding became a key way to bring tradition and togetherness to family and friends, while also respecting the rules and shared responsibilities of a pandemic gathering.</p>

                                <div className="blog-image-container1" data-sal="fade" data-sal-duration="1500" >
                                    <img src={balloonImage} alt="Ballons floating with lights surrounding them."/> 
                                    {/* <StaticImage src={balloonImage} alt="Lit up floating balloons" placeholder="blurred"/> */}
                                </div>   
                    
                                <p data-sal="fade" data-sal-duration="1500">Creativity, caution and consideration were the other keys to making their wedding a safe and spectacular day. With our backyard as the venue, and a very small group of family as guests, we set about making it work - making sure we had arranged for distance and smooth flow as the evening turned from procession to reception.</p> 
                                
                                <p data-sal="fade" data-sal-duration="1500">Livestreaming the wedding was straightforward and smooth. Ourday.ca set up the couple with a webpage link to send to all their guests. The page had pictures, embedded video with a countdown so guests around the world knew where and when to join live, and a link to the couple’s vows and honeymoon fund.</p>

                                <div className="blog-image-container2" data-sal="fade" data-sal-duration="1500">
                                    <img src={fireworksImage} alt="Colourful fireworks going off in a large backyard celebration"/> 
                                    {/* <StaticImage src={fireworksImage} alt="fireworks" placeholder="blurred"/> */}
                                </div>

                                <div className="last-blog-para">
                                    <p data-sal="fade" data-sal-duration="1500">Using a two camera set up - a fixed camera and a videographer - and working alongside the couples’ photographer, ourday.ca broadcast the procession, vows and a heartfelt speech designed to include everyone. Following that, the newlyweds toasted their remote guests and got down to dancing the night away. It was a beautiful way for all of us to be a part of their day.</p>

                                    <p data-sal="fade" data-sal-duration="1500">Your day - whether it’s a wedding, birthday, graduation, or any special event - is going to be memorable. <span> We can help, <Link className="message-link-blog" to="/contact">contact us.</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Blog;