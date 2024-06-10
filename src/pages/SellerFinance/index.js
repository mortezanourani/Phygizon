
import { Outlet } from "react-router-dom";
import SubMenu from "./SubMenu";

import "./index.css";

function SellerFinance() {
    return (
        <div className="seller-finance">
            <SubMenu />

            <Outlet />
        </div>
    )
}

export default SellerFinance;