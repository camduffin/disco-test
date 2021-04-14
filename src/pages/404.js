import * as React from "react";
import { Link } from "gatsby";
import '../../styles/index.scss';
import { GiFlowers } from 'react-icons/gi';

const NotFoundPage = () => {

  return (
      <main className="wrapper">
        <section className="error-section">
          <p>Sorry! No page found.</p>
          <Link to="/">
            <div className="our-day-logo"><GiFlowers/></div>
            <div className="logo">Go Home</div>
          </Link>
        </section>
      </main>
  )
}

export default NotFoundPage
