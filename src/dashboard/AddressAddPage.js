import React, { useState } from "react"
import Layout from "./Layout"

import '../css/address.css';
import { GetUserId, SetAddress } from "../API";

const AddressAddPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        postal_code: '',
        country: '',
        state: '',
        city: '',
        postal_address: '',
        latitude: '0',
        longitude: '0',
        user: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const userId = GetUserId();
    const handleSubmit = () => {
        formData.user = userId;
        SetAddress(formData);
    }

    return (
        <Layout>
            <div className="addaddress" id="addaddress">
                <h3 className="page-title">My Address/Add address</h3>
                <div className="form-control">
                    <label for="">Address title</label>
                    <input type="text" name="title" id="" onChange={handleChange} />
                </div>
                {/* <div className="form-control">
                    <label for="">Reciepient full name</label>
                    <input type="text" name="user" id="" onChange={handleChange} />
                </div> */}
                <div className="form-control">
                    <label for="">Postal code</label>
                    <input type="text" name="postal_code" id="" onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label for="">Country</label>
                    <input type="text" name="country" id="" onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label for="">State</label>
                    <input type="text" name="state" id="" onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label for="">City</label>
                    <input type="text" name="city" id="" onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label for="">Postal address</label>
                    <textarea name="postal_address" id="" rows="4" onChange={handleChange}></textarea>
                </div>
                <div className="form-control">
                    <img src="" alt="" />
                    <a href="mapaddress"></a><button className="btn lg ghost gray dark">Choose On Map</button>
                </div>
                <div className="form-control buttons">
                    <a className="btn lg ghost" href="/dashboard/address/">Cancel</a>
                    <button className="btn lg cta" onClick={handleSubmit}>Address Registration</button>
                </div>
            </div>
        </Layout>
    )
}

export default AddressAddPage;