import React from 'react';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;