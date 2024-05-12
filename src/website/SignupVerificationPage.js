import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Layout from "./Layout";

const SignupVerifyPage = () => {
    const navigate = useNavigate();

    if (localStorage.getItem('authorization') !== null) {
        navigate('/dashboard/', { replace: true });
    }

    // useEffect(() => {
    //     axios.post('https://phygizone.darkube.app/v1/user/register/send_code/',
    //         {
    //             'send_code_type': 'sms'
    //         },
    //         {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': 'token efbKxQqbYMSKygvhtPB0KCW36mD1vgx4xyV5tVCiQEhM7sYlpuIvxLJ6rmFva9a6',
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(response => {
    //             alert(JSON.stringify(response.data));
    //         }).catch(error => {
    //             alert(JSON.stringify(error));
    //         });
    // }, [])

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
            <div className="signup-verification-page">
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
            </div>
        </Layout>
    )
}

export default SignupVerifyPage;
