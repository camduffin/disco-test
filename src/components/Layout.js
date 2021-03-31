import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../styles/index.scss';


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