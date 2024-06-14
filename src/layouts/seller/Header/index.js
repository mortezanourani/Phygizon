import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

import searchIcon from "../../../assets/icons/search_icon.svg";
import plusIcon from "../../../assets/icons/button/plus_icon.svg";
import cartIcon from "../../../assets/icons/button/cart_button_icon.svg";
import notificationIcon from "../../../assets/icons/button/notification_button_icon.svg";

function Header() {
    const [productSearch, setProductSearch] = useState(null);

    const handleProductSearch = (e) => {
        e.preventDefault();

        alert(productSearch);
    }

    return (
        <nav className="seller-dashboard-header">
            <form
                className="search-bar"
                onSubmit={handleProductSearch}>
                <img src={searchIcon} alt="" />
                <input
                    type="search"
                    placeholder="Search in products"
                    onChange={(e) => setProductSearch(e.target.value)} />
            </form>
            <div className="seller-header-buttons">
                <Link
                    to="/seller/products/add/">
                    <button className="btn text new-product">
                        <img src={plusIcon} alt="" />
                        New Prodcut
                    </button>
                </Link>
                <Link
                    to="/">
                    <button className="btn text explore">
                        Explore in Phygizon
                    </button>
                </Link>
                <Link
                    to="/cart/">
                    <button className="btn icon cart">
                        <img src={cartIcon} alt="" />
                    </button>
                </Link>
                <Link
                    to="/dashboard/notifications/">
                    <button className="btn icon notifications">
                        <img src={notificationIcon} alt="" />
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
