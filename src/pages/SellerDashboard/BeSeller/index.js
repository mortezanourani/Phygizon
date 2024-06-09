import { useState } from "react";

import "./index.css";

import beSellerImage from "../../../assets/images/seller/beseller_dashboard_image.svg";
import step1 from "../../../assets/images/seller/beseller_step1.svg";
import step2 from "../../../assets/images/seller/beseller_step2.svg";
import step3 from "../../../assets/images/seller/beseller_step3.svg";
import step4 from "../../../assets/images/seller/beseller_step4.svg";

import ProgressBar from "./ProgressBar";

function BeSeller() {
    const [brand, setBrand] = useState("");
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("Please enter your brand name");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("Next");

    const openPopup = () => {
        setStep(1);
        setTitle("Please enter your brand name");
        setDescription("");
        setButtonText("Next");

        const sellerPopup = document.getElementById("popup");
        sellerPopup.classList.remove("hidden");
    }

    const closePopup = () => {
        const sellerPopup = document.getElementById("popup");
        sellerPopup.classList.add("hidden");
    }

    const renderInputs = () => {
        switch (step) {
            case 1:
                return "Brand Name";
            case 2:
                return "Email address";
            case 3:
                return "";
            case 4:
                return "";
            case 5:
                return "Phone number";
            case 6:
                return "";
            case 7:
                return "";
        }
    }

    const handleProgress = () => {
        switch (step) {
            case 1:
                setTitle("Please enter your email address");
                setDescription("");
                setButtonText("Send Code");
                break;
            case 2:
                setTitle("Please check your email");
                setDescription("We've sent a code to your email");
                setButtonText("Verification");
                break;
            case 3:
                setTitle("Your Email Verification has been successfully completed");
                setDescription("");
                setButtonText("Next");
                break;
            case 4:
                setTitle("Please enter your phone number");
                setDescription("");
                setButtonText("Send Code");
                break;
            case 5:
                setTitle("Please check your messages");
                setDescription("We've sent a code to your phone");
                setButtonText("Verification");
                break;
            case 6:
                setTitle("Your Phone Verification has been successfully completed");
                setDescription("");
                setButtonText("Complete");
                break;
            case 7:
                break;
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
                        <div className="form">
                            {renderInputs()}
                            <input className="username" name="username" placeholder="Brand Name" value={brand} onChange={(e) => setBrand(e.target.value)} />
                        </div>
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