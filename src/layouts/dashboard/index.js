import { useAuth } from "../../AuthProvider";

import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import "./index.css";

function PanelLayout() {
    const user = useAuth();
    user.validateToken();

    if (!user.token) return <Navigate to="/" />;

    const root = document.getElementById('root');
    root.classList.add('dashboard');

    return (
        <>
            <Sidebar />
            <main>
                <Header />

                <Outlet />
            </main>
        </>
    );
}

export default PanelLayout;