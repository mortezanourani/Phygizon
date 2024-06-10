import { NavLink } from "react-router-dom";

import "./index.css";

function SubMenu() {
    return (
        <div className="seller-finance-submenu">
            <NavLink
                to="/seller/finance/wallet/">
                <button>Wallet</button>
            </NavLink>
            <NavLink
                to="/seller/finance/paymenthistory/">
                <button>Payment History</button>
            </NavLink>
        </div>
    )
}

export default SubMenu;