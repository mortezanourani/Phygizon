import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider"

const PrivateRoute = () => {
    const user = useAuth();
    user.validateToken();
    if (!user.token) return <Navigate to='/' />;
    return <Outlet />;
};

export default PrivateRoute;