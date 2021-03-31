import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = (props) => {
    return (
        <div className="main-container">
            <div className="main-content">
                <Header />
                {props.children}    
            </div>
            <Footer />
        </div>
    )
}

export default Layout;