import React from "react";
import Sidebar from "./LayoutSidebar";
import Header from "./LayoutHeader";

const Layout = ({ children }) => {
    const root = document.getElementById('root');
    root.classList.add('dashboard');

    return (
        <>
            <Sidebar />
            <main>
                <Header />
                {children}
            </main>
        </>
    );
}

export default Layout;