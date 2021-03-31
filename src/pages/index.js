import * as React from "react"
import '../../styles/index.scss';
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {

  return (
      <Layout>
        <div className="main-image-header" data-sal="fade-in" data-sal-easing="ease" data-sal-delay="100">
          <h1 className='about-header'>YESSSSSSs</h1>
          <button onClick={() => scrollTo('#content')}>Scroll</button>
        </div>
      
        <div className="wrapper" id="content">
          <p>We are here to help you turn your day into ourday!</p>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nihil reprehenderit voluptatibus odio quam iusto totam labore velit quae exercitationem doloremque ab ipsa quasi suscipit officia est dolor et unde, voluptates deserunt tempora ducimus reiciendis, blanditiis eligendi. Qui nihil illo blanditiis suscipit exercitationem rem deserunt quae, nobis voluptates placeat eveniet earum dolores, beatae eum, accusamus quam veniam nam incidunt aliquam vitae. Optio minima, qui doloremque consequuntur eius illo in tempora beatae, nesciunt cupiditate repellat cum atque, est ad ea culpa veniam assumenda voluptate dolores aliquam doloribus laboriosam voluptas vitae quaerat? Iusto voluptates, vero aspernatur unde illo molestiae vel recusandae ut!</p>
        </div>
      </Layout>
  )

}

export default IndexPage