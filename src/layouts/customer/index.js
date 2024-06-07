import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./index.css";

function CustomerLayout() {
    const user = useAuth();
    // user.validateToken();

    if (!user.token) return <Navigate to="/" />;

    return (
        <div className="customer">
            <Sidebar />
            <main>
                <Header />

                <Outlet />
            </main>
        </div>
    );
}

export default CustomerLayout;