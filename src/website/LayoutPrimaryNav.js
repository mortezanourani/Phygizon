import React from "react";

import logo from '../logo.svg';
import '../css/primarynav.css';
import { Categories } from "../API";
import NavigationMenu from "../components/NavigationMenu";

const PrimaryNav = () => {
    const collapseMenu = (e) => {
        e.preventDefault();

        const primaryMenu = document.getElementById('primary-nav-menu');
        primaryMenu.classList.toggle('collapsed');
    }

    const categories = Categories();
    const parentCategories = categories.categories.filter(category => (category.parent === null));
    const categoriesPopup = (e) => {
        e.preventDefault();

        const catPopup = document.getElementById("categories-popup");
        catPopup.classList.toggle('collapsed');
    }

    const displayChilds = (e) => {
        const parentId = e.target.id;

        const parentLinks = document.getElementsByClassName("parent-link");
        for (let i = 0; i < parentLinks.length; i++) {
            parentLinks[i].classList.remove("active");
        }
        e.target.classList.add("active");

        const childContents = document.getElementsByClassName('child-content');
        for (let i = 0; i < childContents.length; i++) {
            childContents[i].style.display = "none";
        }
        document.getElementById("childsof" + parentId).style.display = "flex";
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
                    <ul className="main-menu">
                        <li className="menu-item">
                            <a href='/categories/' onClick={categoriesPopup}>
                                <button className="btn lg text gray">
                                    Categories
                                    <img style={{ marginLeft: "12px" }} src="/images/icons/icon.categories.downarrow.svg" alt="" /></button>
                            </a>
                        </li >
                        <div className="primary-nav-popup-menu" id="categories-popup">
                            <div className="container">
                                <div className="parents">
                                    {
                                        parentCategories.map(category => (
                                            <a className="parent-link btn text gray lg" id={category.id} onMouseOver={displayChilds} href={"/category/" + category.id}>
                                                <img src="/images/icons/icon.categories.svg" alt="" />
                                                {category.name}
                                            </a>
                                        ))
                                    }
                                </div>
                                <div className="childs">
                                    {
                                        parentCategories.map(category => {
                                            let childList = category.sub_categories;
                                            return (
                                                <div className="child-content" id={"childsof" + category.id}>
                                                    {
                                                        (childList.length !== 0) ? (
                                                            childList.map(category => (
                                                                <div className="child-column">
                                                                    <a href={"/category/" + category.id}><h3>{category.name}</h3></a>
                                                                </div>
                                                            ))) : (null)
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
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
                    <NavigationMenu />
                </div>
            </div>
        </nav >
    );
}

export default PrimaryNav;
