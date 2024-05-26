import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Verify = () => {
    const [type, setType] = useState(null);
    const [key, setKey] = useState(null);
    const [receiver, setReceiver] = useState(null);

    const navigate = useNavigate();

    if (localStorage.getItem('Authorization') !== null) {
        navigate('/dashboard/', { replace: true });
    }

    useEffect(() => {
        axios.post('https://phygizone.darkube.app/v1/user/register/send_code/',
            {
                'send_code_type': 'sms'
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': localStorage.getItem('register'),
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                let data = response.data.random_number;
                setType(data.send_code_type);
                setKey(data.key);
                setReceiver(data.receiver);
            }).catch(error => {
                alert(error.message);
            });
    }, []);

    const handleChange = (e) => {
        let inputCode = "";

        const inputDigits = document.getElementsByClassName('digit');
        for (let i = 0; i < inputDigits.length; i++) {
            inputCode += inputDigits[i].value;
        }

        if (e.target.nextSibling === null) {
            axios.post('https://phygizone.darkube.app/v1/user/register/check_code/',
                {
                    'random_key': key,
                    'random_code': inputCode
                }, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': localStorage.getItem('register'),
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    navigate('/signup/password/', { replace: true });
                }
            }).catch(error => {
                if (error.response.status === 400) {
                    alert('Wrong code.');
                }
            });
            return;
        }

        e.target.nextSibling.focus();
        e.target.nextSibling.select();
    }

    return (
        <>
            <div id="signup-verification-page">
                <form className="signup-verification-form">
                    <img className="logo" src="/logomini.svg" alt="" />
                    <div>
                        <h4>Enter Verification Code</h4>
                        <p>We sent a <b style={{ textTransform: "uppercase" }}>{type}</b> to <b>{receiver}</b>.</p>
                    </div>
                    <div className="digits-group">
                        <input className="digit" name="code" placeholder="0" onChange={handleChange} />
                        <input className="digit" name="code" placeholder="0" onChange={handleChange} />
                        <input className="digit" name="code" placeholder="0" onChange={handleChange} />
                        <input className="digit" name="code" placeholder="0" onChange={handleChange} />
                        <input className="digit" name="code" placeholder="0" onChange={handleChange} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Verify;
