import React from "react";

import logo from '../logo.svg';
import '../css/primarynav.css';

const PrimaryNav = () => {
    return (
        <nav className="primary-nav">
            <div className="container">
                <a className="navbar-brand" itemID='brand' href='/'>
                    <img src={logo} alt='Phygizon' />
                </a>
                <div className="menu">
                    <ul className="main-menu">
                        <li className="menu-item">
                            <a href='/categories/'>
                                <button className="btn lg text gray">Categories</button>
                            </a>
                        </li >
                        <li className="menu-item">
                            <a href='/popular/'>
                                <button className="btn lg text gray">Popular</button>
                            </a>
                        </li >
                        <li className="menu-item">
                            <a href='/offers/'>
                                <button className="btn lg text gray">Offers</button>
                            </a>
                        </li >
                        <li className="menu-item">
                            <a href='/sellers/'>
                                <button className="btn lg text gray">Sellers</button>
                            </a>
                        </li >
                        <li className="menu-item">
                            <a href='/helpcenter/'>
                                <button className="btn lg text gray">Help Center</button>
                            </a>
                        </li >
                    </ul>
                    <ul class="navigation-menu">
                        <li className="menu-item">
                            <a href='/login/'>
                                <button className="btn lg text gray">Login</button>
                            </a>
                        </li >
                        <li className="menu-item">
                            <a href='/signup/'>
                                <button className="btn md cta">Sign up</button>
                            </a>
                        </li >
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default PrimaryNav;