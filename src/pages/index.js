import * as React from "react"
import '../../styles/index.scss';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
      <Layout>
        <h1 className='about-header'>Hello world</h1>
        <nav>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </Layout>
  )

}

export default IndexPage
