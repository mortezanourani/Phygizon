import { useAuth } from "../../AuthProvider";

import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import "./index.css";

function SellerLayout() {
    const user = useAuth();
    user.validateToken();

    if (!user.token) return <Navigate to="/" />;

    return (
        <div className="seller">
            <Sidebar />
            <main>
                <Header />

                <Outlet />
            </main>
        </div>
    );
}

export default SellerLayout;