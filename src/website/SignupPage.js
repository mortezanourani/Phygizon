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
        email: '',
        firstname: '',
        lastname: '',
        country: '',
        phonenumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://phygizone.darkube.app/v1/user/register/user/', {
            email: formData.email,
            first_name: formData.firstname,
            last_name: formData.lastname,
            country: formData.country,
            phone_number: formData.phonenumber,
        })
            .then(response => {
                if (response.status === 201) {
                    localStorage.setItem('register', 'token ' + response.data.token_info.token);
                    navigate('/signup/password/', { replace: true });
                }
            }).catch(error => {
                alert(error.response.data.message);
            });
    }

    return (
        <Layout>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 style={{ marginBottom: '16px', marginTop: '-64px' }}>Welcome to Phygizon</h1>
                <div>
                    <input type="email" className="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <input className="firstname" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                    <input className="lastname" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                </div>
                <div>
                    <input className="country" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                    <input type="tel" className="phonenumber" name="phonenumber" placeholder="Phone Number" value={formData.phonenumber} onChange={handleChange} />
                </div>

                <button type="submit" className="btn cta lg">Continue</button>
            </form>
        </Layout>
    )
}

export default SignupPage;
