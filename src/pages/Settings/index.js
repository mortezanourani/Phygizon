import React, { useEffect, useState } from "react"
import { PhoneInput } from "react-international-phone";
import { UpdateSettings } from "../../API";

import './index.css';
import 'react-international-phone/style.css';
import axios from "axios";

const Settings = () => {
    const [settings, setSettings] = useState(null);

    const [avatar, setAvatar] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [mobile, setMobile] = useState('');
    const [altEmail, setAltEmail] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('ua');
    const [newsNotif, setNewsNotif] = useState(false);
    const [tipsNotif, setTipsNotif] = useState(false);

    useEffect(() => {
        axios.get('https://phygizone.darkube.app/v1/user/profile/info/', {
            headers: {
                'accept': 'application/json',
                'Authorization': localStorage.getItem('Authorization'),
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.status === 200) {
                let data = response.data;
                setSettings(data);
                setAvatar(data.avatar);
                setFirstname(data.first_name);
                setLastname(data.last_name);
                setCountry(data.country);
                setMobile(data.phone_number);
                setAltEmail(data.email);
                setEmail(data.email);
                setNewsNotif(data.push_notification);
                setTipsNotif(data.email_notification);
            }
        }).catch(() => { });
    }, []);

    const handleSubmit = () => {
        const country = document.querySelector('.phone button').getAttribute('data-country');
        UpdateSettings({
            first_name: firstname,
            last_name: lastname,
            country: country,
            push_notification: (newsNotif) ? true : false,
            email_notification: (tipsNotif) ? true : false,
        });
    }

    return (
        <div className="profile" id="settings">
            <h3 className="page-title">Edit profile</h3>
            <div className="form-control" id="avatar">
                <label>
                    <h4 className="title">Your photo</h4>
                    <p className="description">This will be displayed on your profile.</p>
                </label>
                <div className="avatar-options">
                    <img src="" alt="" />
                    <span>
                        <a className="lnk text sm gray" style={{ marginRight: '12px' }}>Delete</a>
                        <a className="lnk text sm cta">Update</a>
                    </span>
                </div>
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Name</h4>
                </label>
                <div>
                    <input type="text" placeholder="First name" className="firstname"
                        value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <input type="text" placeholder="Last name" className="lastname"
                        value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Mobile</h4>
                </label>
                <PhoneInput
                    className="phone"
                    inputClassName="phonenumber"
                    defaultCountry="ca"
                    value={mobile}
                    onChange={(mobile) => setMobile(mobile)}
                />
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Alternative contact email</h4>
                    <p className="description">Enter an alternative email if you'd like to be contacted via a different
                        email.</p>
                </label>
                <input type="email" placeholder="you@example.com" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} />
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Check your email address for verify your email</h4>
                    <a className="lnk sm text" href="#">Resend mail</a>
                </label>
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Password</h4>
                    <a className="lnk sm text" href="#">Reset password</a>
                </label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.email)} />
            </div>
            <div className="form-control">
                <label>
                    <h4 className="title">Notifications from us</h4>
                    <p className="description">Recieve the latest news, updates and industry tutorials from us.</p>
                </label>
                <div className="notifications-options">
                    <div className="option">
                        <input type="checkbox" id="news-notification" checked={newsNotif} onChange={(e) => setNewsNotif(e.target.checked)} />
                        <label for="news-notification">
                            <h5>News and updates</h5>
                            <p className="description">News about product and feature update</p>
                        </label>
                    </div>
                    <div className="option">
                        <input type="checkbox" id="tips-notification" checked={tipsNotif} onChange={(e) => setTipsNotif(e.target.checked)} />
                        <label for="tips-notification">
                            <h5>Tips and tutorials</h5>
                            <p className="description">Tips on getting more out of Untitled.</p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-control buttons">
                <button className="btn lg cta" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}

export default Settings;