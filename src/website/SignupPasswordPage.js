import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Layout from "./Layout";

const SignupPage = () => {
    const navigate = useNavigate();

    if (localStorage.getItem('authorization') !== null) {
        window.location.replace('/dashboard/');
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

        await axios.post('https://phygizone.darkube.app/v1/user/register/set_password/',
            {
                password: formData.password,
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': localStorage.getItem('register'),
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    alert('Welcome to our community.');
                    navigate('/', { replace: true });
                }
            }).catch(error => {
                alert(error.message);
            });
    }

    return (
        <Layout>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 style={{ marginBottom: '16px', marginTop: '-64px' }}>Set your Password</h1>
                <div>
                    <input type="password" className="password" name="password" placeholder="Password" onChange={handleChange} />
                </div>
                <div>
                    <input type="password" className="retype" name="confirmpassword" placeholder="Retype" onChange={handleChange} />
                </div>

                <button type="submit" className="btn cta lg">Set</button>
            </form>
        </Layout>
    )
}

export default SignupPage;
