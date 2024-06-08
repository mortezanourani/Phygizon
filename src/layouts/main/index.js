import { Outlet } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
    const user = useAuth();
    user.validateToken();

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
