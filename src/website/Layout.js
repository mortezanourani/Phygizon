import React from "react";
import PrimaryNav from "./LayoutPrimaryNav";
import Footer from './LayoutFooter';

const Layout = ({ children }) => {
    return (
        <>
            <PrimaryNav />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
