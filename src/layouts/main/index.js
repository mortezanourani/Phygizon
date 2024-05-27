import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 70px)' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;
