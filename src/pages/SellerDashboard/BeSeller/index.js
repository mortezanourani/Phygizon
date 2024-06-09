import { useState } from "react";
import { useAuth } from "../../../AuthProvider";
import { PhoneInput } from "react-international-phone";
import { changeEmailAPI, changePhoneAPI, headers, sellerSignupAPI } from "../../../hooks/apiUrls";
import axios from "axios";
import useProfileInfo from "../../../hooks/useProfileInfo";

import "./index.css";
import Loading from "../../../components/Loading";

import beSellerImage from "../../../assets/images/seller/beseller_dashboard_image.svg";
import step1 from "../../../assets/images/seller/beseller_step1.svg";
import step2 from "../../../assets/images/seller/beseller_step2.svg";
import step3 from "../../../assets/images/seller/beseller_step3.svg";
import step4 from "../../../assets/images/seller/beseller_step4.svg";
import mailIcon from "../../../assets/icons/seller/mail_icon.svg";
import verificationImage from "../../../assets/images/seller/beseller_verification_image.svg";

import ProgressBar from "./ProgressBar";

function BeSeller() {
    const auth = useAuth();
    const { loading, data, error } = useProfileInfo();

    const [brand, setBrand] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("Please enter your brand name");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("Next");

    const digit = [];
    const [verificationCode, setVerificationCode] = useState(null);

    if (loading) {
        return <Loading />
    }

    const openPopup = () => {
        setStep(1);
        setTitle("Please enter your brand name");
        setDescription("");
        setButtonText("Next");

        setEmail(data.email);
        setPhone(data.phone_number);

        const sellerPopup = document.getElementById("popup");
        sellerPopup.classList.remove("hidden");
    }

    const closePopup = () => {
        const sellerPopup = document.getElementById("popup");
        sellerPopup.classList.add("hidden");
    }

    const handleChange = (e) => {
        let code = "";
        const digits = document.getElementsByClassName('digit');
        for (let i = 0; i < digits.length; i++) {
            code += digits[i].value;
        }
        setVerificationCode(code);

        if (e.target.nextSibling) {
            e.target.nextSibling.focus();
            e.target.nextSibling.select();
        }
    }

    const renderInputs = () => {
        switch (step) {
            case 1:
                return (
                    <div className="input">
                        <label>Brand Name</label>
                        <input
                            placeholder="Brand Name"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)} />
                    </div>
                );
            case 2:
                return (
                    <div className="input email">
                        <label>Email address</label>
                        <img src={mailIcon} alt="" />
                        <input
                            className="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                );
            case 3:
                return (
                    <span>
                        <div className="digits-group">
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                        </div>
                        <p className="link">Didn’t get a code? <a href="#">Click to resend.</a></p>
                    </span>
                );
            case 4:
                return (
                    <div className="verified">
                        <img src={verificationImage} alt="" />
                    </div>
                );
            case 5:
                return (
                    <span className="input">
                        <label>Phone number</label>
                        <PhoneInput
                            ClassName="input"
                            defaultCountry="ca"
                            value={phone}
                            onChange={(phone) => setPhone(phone)} />
                    </span>
                );
            case 6:
                return (
                    <span>
                        <div className="digits-group">
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                            <input className="digit" placeholder="0" onChange={handleChange} />
                        </div>
                        <p className="link">Didn’t get a code? <a href="#">Click to resend.</a></p>
                    </span>
                );
            case 7:
                return (
                    <div className="verified">
                        <img src={verificationImage} alt="" />
                    </div>
                );
        }
    }

    const handleProgress = () => {
        switch (step) {
            case 1:
                if (!brand) {
                    return alert('Please enter brand name!');
                }
                setTitle("Please enter your email address");
                setDescription("");
                setButtonText("Send Code");
                break;
            case 2:
                if (!email) {
                    return alert('Please enter valid email address!');
                }

                // send email
                axios.post(changeEmailAPI, { email }, { headers })
                    .then(() => { return; })
                    .catch(error => alert(error.message))
                    .finally(() => {
                        setTitle("Please check your email");
                        setDescription("We've sent a code to " + email);
                        setButtonText("Verification");
                    });
                break;
            case 3:
                // verify email
                setTitle("Your Email Verification has been successfully completed");
                setDescription("");
                setButtonText("Next");
                setVerificationCode(null);
                break;
            case 4:
                // setTitle("Please enter your phone number");
                // setDescription("");
                // setButtonText("Send Code");

                // Because phone number has been verified
                setTimeout(() => {
                    setStep(7);
                }, 200);
                setTitle("Your Phone Verification has been successfully completed");
                setDescription("");
                setButtonText("Complete");
                break;
            case 5:
                if (phone.length < 13) {
                    return alert("Please enter valid phone number.");
                }

                // send sms
                axios.post(changePhoneAPI, { phone_number: phone }, { headers })
                    .then(() => { return; })
                    .catch(error => alert(error.message))
                    .finally(() => {
                        setTitle("Please check your messages");
                        setDescription("We've sent a code to " + phone);
                        setButtonText("Verification");
                    });

                break;
            case 6:
                // verify phone number
                setTitle("Your Phone Verification has been successfully completed");
                setDescription("");
                setButtonText("Complete");
                break;
            case 7:
                // Create seller
                axios.post(sellerSignupAPI, { brand }, { headers })
                    .then(() => {
                        localStorage.setItem("UserType", 3);
                        document.location.reload();
                    })
                    .catch(error => alert(error.message))
                    .finally();
                return;
        }
        setStep(step + 1);
    }

    return (
        <div className="beseller">
            <div className="content">
                <div className="context">
                    <img src={beSellerImage} alt="" />
                    <div className="text">
                        <h2>Become a Phygizon seller</h2>
                        <p>As a seller, you can sell Your Products in market place of Phygizon.</p>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <img src={step1} alt="" />
                            <p>Submit info & request</p>
                        </div>
                        <div className="step">
                            <img src={step2} alt="" />
                            <p>Activation</p>
                        </div>
                        <div className="step">
                            <img src={step3} alt="" />
                            <p>Import Products</p>
                        </div>
                        <div className="step">
                            <img src={step4} alt="" />
                            <p>Start Sale</p>
                        </div>
                    </div>
                </div>
                <button
                    className="btn lg cta start"
                    onClick={openPopup}>
                    start
                </button>
            </div>

            <div id="popup" className="hidden">
                <div className="modal">
                    <div className="title-bar">
                        <h3>Complete your user information</h3>
                        <button type="reset" className="btn text gray close" onClick={closePopup}>
                            <img src="/images/icons/icon.close.svg" alt="" />
                        </button>
                        <ProgressBar
                            step={step} />
                    </div>
                    <div className="inputs">
                        <div>
                            <h3 className="title">{title}</h3>
                            <p className="description">{description}</p>
                        </div>
                        {
                            renderInputs()
                        }
                    </div>
                    <div className="buttons">
                        <button
                            className="btn ghost xl gray dark"
                            onClick={closePopup}>
                            Back to Phygizon
                        </button>
                        <button
                            onClick={handleProgress}
                            className="btn cta xl">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default BeSeller;