import React from 'react';
import '../../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = (props) => {
    return (
        <div className="main-container">
            <Header />
            <div className="main-content">
                {props.children}    
            </div>
            <Footer />
        </div>
    )
}

export default Layout;