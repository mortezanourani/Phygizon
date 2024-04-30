import React from "react";
import PrimaryNav from "./LayoutPrimaryNav";
import Footer from './LayoutFooter';

const Layout = ({ children }) => {
    return (
        <>
            <PrimaryNav />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
