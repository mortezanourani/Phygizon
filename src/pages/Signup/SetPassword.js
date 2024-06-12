import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { userRegisterSetPassword } from "../../hooks/apiUrls";

const SetPassword = () => {
    const navigate = useNavigate();

    if (localStorage.getItem('authorization') !== null) {
        window.location.replace('/dashboard/');
    }

    if (localStorage.getItem('register') === null) {
        window.location.replace('/');
    }

    const [formData, setFormData] = useState({
        password: '',
        confirmpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.confirmpassword !== formData.password) {
            alert('The passwords are not the same');
            return;
        }

        await axios.post(userRegisterSetPassword, { password: formData.password },
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': localStorage.getItem('register'),
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    alert('Welcome to our community.');
                    localStorage.removeItem('register');
                    return navigate('/', { replace: true });
                }
            }).catch(error => {
                alert(error.message);
            });
    }

    return (
        <>
            <div id="signup-password-page">
                <form className="signup-password-form" onSubmit={handleSubmit}>
                    <img className="logo" src="/logomini.svg" alt="" />
                    <span>
                        <h4>Welcome to Phygizon</h4>
                        <p>We are glad to see you here.</p>
                    </span>
                    <input type="password" className="password" name="password" placeholder="Password" onChange={handleChange} />
                    <input type="password" className="retype" name="confirmpassword" placeholder="Retype" onChange={handleChange} />

                    <button type="submit" className="btn cta lg">Continue</button>
                </form>
            </div>
        </>
    )
}

export default SetPassword;
