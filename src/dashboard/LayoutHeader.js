import React from "react";

const Header = () => {
    return (
        <nav>
            <form action="">
                <div class="form-control">
                    <img src="/images/icons/icon.search.svg" alt="" />
                    <input type="search" name="" id="" placeholder="Search in products" />
                </div>
            </form>

            <a href="/" class="btn xl text explore">Explore in Phygizon</a>
            <a href="/cart/" class="btn xl icon cart">
                <img src="/images/icons/icon.cart.svg" alt="" />
            </a>
            <a href="/dashboard/notifications/" class="btn xl icon notifications">
                <img src="/images/icons/icon.notifications.svg" alt="" />
            </a>
        </nav>
    );
}

export default Header;