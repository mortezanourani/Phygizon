import { useAuth } from "../../AuthProvider";
import BeSeller from "./BeSeller";
import Dashboard from "./Dashboard";

import "./index.css";

const SellerDashboard = () => {
    const auth = useAuth();

    return (
        <div className="seller-dashboard">
            {
                (auth.userType == 2)
                    ?
                    <BeSeller />
                    :
                    <Dashboard />
            }
        </div>
    );
}

export default SellerDashboard; 