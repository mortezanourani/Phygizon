import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from '../logo.svg';
import '../css/primarynav.css';
import { Categories } from "../API";

const PrimaryNav = () => {
    const categories = Categories();

    const parentCategories = categories.categories.filter(category => (category.parent === null));

    const childLists = parentCategories.map((parent) => {
        return categories.categories.filter(category => (category.parent === parent.id));
    });

    const navigate = useNavigate();

    const handleLoginForm = () => {
        if (localStorage.getItem('authorization') !== null) {
            navigate('/dashboard/', { replace: true });
        }
        document.getElementById('login-popup').style.display = 'block';
    }

    const closePopup = (e) => {
        if (e.target !== document.getElementById('login-popup')) {
            return;
        }
        document.getElementById('login-popup').style.display = 'none';
    }

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://phygizone.darkube.app/v1/user/login/check_password/', formData)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('authorization', 'token ' + response.data.token_info.token);
                    navigate('/dashboard/', { replace: true });
                }
            }).catch(error => {
                alert(JSON.stringify(error.response.status));
            });
    }

    const categoriesPopup = (e) => {
        e.preventDefault();

        const catPopup = document.getElementById("categories-popup");
        catPopup.style.display = (catPopup.style.display !== "flex") ? "flex" : "none";
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
                <div className="menu">
                    <ul className="main-menu">
                        <li className="menu-item">
                            <a href='/categories/' onClick={categoriesPopup}>
                                <button className="btn lg text gray">Categories <img style={{ marginLeft: "12px" }} src="/images/icons/icon.categories.downarrow.svg" /></button>
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
                    {
                        (window.localStorage.getItem('authorization') === null) ? (
                            <ul className="navigation-menu">
                                <li className="menu-item">
                                    <button className="btn lg text gray" onClick={handleLoginForm}>Login</button>
                                </li >
                                <li className="menu-item">
                                    <a href='/signup/'>
                                        <button className="btn md cta">Sign up</button>
                                    </a>
                                </li >
                            </ul>
                        ) : (
                            <ul className="navigation-menu">
                                <li className="menu-item">
                                    <a href='/dashboard/'>
                                        <button className="btn md cta">Dashboard</button>
                                    </a>
                                </li >
                            </ul>
                        )

                    }
                </div>
            </div>
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
                            }
                            )
                            // childLists.map(childList => (
                            //     (childList.length !== 0) ? (
                            //         <div className="child-content" id={JSON.stringify(childList[0].parent)}>
                            //             {
                            //                 childList.map(list => (
                            //                     <div className="child-column">
                            //                         <a href={"/category/" + list.id}><h3>{list.name}</h3></a>
                            //                     </div>
                            //                 ))
                            //             }
                            //         </div>
                            //     ) : (null)
                            // ))
                        }
                    </div>
                </div>
            </div>
            <div id="login-popup" onClick={closePopup}>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input className="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                    <input className="password" type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button type="submit" className="btn cta lg">Login</button>
                </form>
            </div>
        </nav >
    );
}

export default PrimaryNav;
