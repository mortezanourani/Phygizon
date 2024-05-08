import React from "react";

const Header = () => {
    return (
        <nav>
            <form action="">
                <div className="form-control">
                    <img src="/images/icons/icon.search.svg" alt="" />
                    <input type="search" name="" id="" placeholder="Search in products" />
                </div>
            </form>

            <a href="/" className="btn xl text explore">Explore in Phygizon</a>
            <a href="/cart/" className="btn xl icon cart">
                <img src="/images/icons/icon.cart.svg" alt="" />
            </a>
            <a href="/dashboard/notifications/" className="btn xl icon notifications">
                <img src="/images/icons/icon.notifications.svg" alt="" />
            </a>
        </nav>
    );
}

export default Header;
