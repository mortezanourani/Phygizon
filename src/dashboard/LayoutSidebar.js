import React from "react";

import logo from '../logo.svg';

const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authorization');
    window.location.replace('/');
}

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
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
                        <a href="#" onClick={Logout}>
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