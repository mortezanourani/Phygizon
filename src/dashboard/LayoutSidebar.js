import React from "react";
import { useAuth } from "../AuthProvider";

import logo from '../logo.svg';

const handleCollapse = () => {
    const aside = document.querySelector('aside');
    aside.classList.toggle('collapsed');
}

const Sidebar = () => {
    const auth = useAuth();

    return (
        <aside>
            <nav>
                <div>
                    <a className="brand" href="/">
                        <img src={logo} alt="" />
                    </a>
                    <div>
                        <a href="/cart/">
                            <button className="btn text gray cart-button">
                                <img src="/images/icons/icon.cart.svg" alt="" />
                            </button>
                        </a>
                        <button className="btn text gray collaps-button" onClick={handleCollapse}>
                            <img src="/images/icons/icon.hamburger.menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="/dashboard/">
                            <img src="/images/icons/icon.dashboard.svg" alt="" />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/orders/">
                            <img src="/images/icons/icon.orders.svg" alt="" />
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/playground/">
                            <img src="/images/icons/icon.playground.svg" alt="" />
                            Playground
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/finance/">
                            <img src="/images/icons/icon.finance.svg" alt="" />
                            Finance
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/address/">
                            <img src="/images/icons/icon.address.svg" alt="" />
                            Address
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/settings/">
                            <img src="/images/icons/icon.settings.svg" alt="" />
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="/dasbhaord/support/">
                            <img src="/images/icons/icon.support.svg" alt="" />
                            Support
                        </a>
                    </li>
                    <li>
                        <a onClick={() => auth.logOut()}>
                            <img src="/images/icons/icon.logout.svg" alt="" />
                            Log Out
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;