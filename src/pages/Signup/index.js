import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { userRegisterAPI } from "../../hooks/apiUrls";

const Signup = () => {
    const navigate = useNavigate();

    if (localStorage.getItem('Authorization') !== null) {
        window.location.replace('/dashboard/');
    }

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            first_name: firstname,
            last_name: lastname,
            country: document.querySelector('.phone button').getAttribute('data-country'),
            phone_number: phone,
        };
        await axios.post(userRegisterAPI, formData
        ).then(response => {
            if (response.status === 201) {
                localStorage.setItem('register', 'token ' + response.data.token_info.token);
                navigate('/signup/verify/', { replace: true });
            }
        }).catch(error => {
            alert(error.response.data.message);
        });
    }

    return (
        <>
            <div id="signup-page">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <img className="logo" src="/logomini.svg" alt="" />
                    <span>
                        <h4>Welcome to Phygizon</h4>
                        <p>We are glad to see you here.</p>
                    </span>
                    <input type="email" className="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="firstname" name="firstname" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <input className="lastname" name="lastname" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <PhoneInput
                        className="phone"
                        inputClassName="phonenumber"
                        defaultCountry="ca"
                        name="phonenumber"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                    />

                    <button type="submit" className="btn cta lg">Continue</button>
                </form>
            </div>
        </>
    )
}

export default Signup;
