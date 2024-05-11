import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Layout from "./Layout";

const SignupVerifyPage = () => {
    const navigate = useNavigate();

    if (localStorage.getItem('authorization') !== null) {
        navigate('/dashboard/', { replace: true });
    }

    const [formData, setFormData] = useState({
        verification_code: '',
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        alert(JSON.stringify(formData));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://phygizone.darkube.app/v1/user/register/user/')
            .then(() => { })
            .catch(() => { });

        navigate('/signup/password/', { replace: true })
    }

    return (
        <Layout>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 style={{ marginBottom: '16px', marginTop: '-64px' }}>Verification Code</h1>
                <div>
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                    <input className="verification" name="code" placeholder="" onChange={handleChange} />
                </div>
                <button type="submit" className="btn cta lg">Verify</button>
            </form>
        </Layout>
    )
}

export default SignupVerifyPage;
