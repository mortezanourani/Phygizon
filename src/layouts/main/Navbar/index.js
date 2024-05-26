import React from "react";

import MainMenu from './MainMenu';
import NavigationMenu from './NavigationMenu';

import logo from '../../../logo.svg';
import './navbar.css';

const Navbar = () => {
    const collapseMenu = (e) => {
        e.preventDefault();

        const primaryMenu = document.getElementById('primary-nav-menu');
        primaryMenu.classList.toggle('collapsed');
    }

    return (
        <nav className="primary-nav">
            <div className="container">
                <a className="navbar-brand" itemID='brand' href='/'>
                    <img src={logo} alt='Phygizon' />
                </a>
                <button className="btn text gray" id="collapse-button" onClick={collapseMenu}>
                    <img src="/images/icons/icon.hamburger.menu.svg" alt="" />
                </button>
                <div id="primary-nav-menu" className="menu">
                    <MainMenu />
                    <NavigationMenu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
