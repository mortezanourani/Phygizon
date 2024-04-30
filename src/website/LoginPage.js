import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Layout from "./Layout";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://phygizone.darkube.app/v1/user/login/check_password/', formData)
            .then(response => {
                // alert(JSON.stringify(response.data))
                document.body.innerHTML = response.data.token_info.token;
                // navigate('/dashboard/', { replace: true });
            }).catch(error => {
                alert(error);
            });
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <input name="username" value={formData.username} onChange={handleChange} />
                <input name="password" onChange={handleChange} />
                <button type="submit" className="btn cta lg">Login</button>
            </form>
        </Layout>
    )
}

export default LoginPage;
