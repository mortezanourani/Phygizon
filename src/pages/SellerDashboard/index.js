import { useAuth } from "../../AuthProvider";
import BeSeller from "./BeSeller";
import Dashboard from "./Dashboard";

const SellerDashboard = () => {
    const auth = useAuth();

    return (
        (auth.userType == 2)
            ?
            <BeSeller />
            :
            <Dashboard />
    );
}

export default SellerDashboard; 