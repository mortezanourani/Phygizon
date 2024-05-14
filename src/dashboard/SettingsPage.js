import React, { useState } from "react"
import Layout from "./Layout"
import { PhoneInput } from "react-international-phone";

import '../css/settings.css';
import 'react-international-phone/style.css';

const SettingsPage = () => {
    const [avatar, setAvatar] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsNotif, setNewsNotif] = useState(false);
    const [tipsNotif, setTipsNotif] = useState(false);

    return (
        <Layout>
            <div className="profile" id="settings">
                <h3 className="page-title">Edit profile</h3>
                <div className="form-control" id="avatar">
                    <label>
                        <h4 className="title">Your photo</h4>
                        <p className="description">This will be displayed on your profile.</p>
                    </label>
                    <img src="" alt="" />
                    <span>
                        <a href="#" className="btn text sm destruction">Delete</a>
                        <a href="#" className="btn text sm gray">Update</a>
                    </span>
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
                    <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setAltEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>
                        <h4 className="title">Check your email address for verify your email</h4>
                        <a className="lnk sm text" href="#">Resend mail</a>
                    </label>
                    <input type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />
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
                    <label>
                        <input type="checkbox" />
                        <label for="">
                            <h5>News and updates</h5>
                            <p className="description">News about product and feature update</p>
                        </label>
                        <input type="checkbox" />
                        <label for="">
                            <h5>Tips and tutorials</h5>
                            <p className="description">Tips on getting more out of Untitled.</p>
                        </label>
                    </label>
                </div>
            </div>
        </Layout>
    )
}

export default SettingsPage;