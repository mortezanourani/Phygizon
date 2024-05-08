import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from '../logo.svg';
import '../css/primarynav.css';

const PrimaryNav = () => {
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
            <div id="login-popup" onClick={closePopup}>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input className="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                    <input className="password" type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button type="submit" className="btn cta lg">Login</button>
                </form>
            </div>
        </nav>
    );
}

export default PrimaryNav;
