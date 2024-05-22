import React, { useState } from "react"
import MapPicker from 'react-google-map-picker';
import { CountrySelector, PhoneInput } from "react-international-phone";
import { SetAddress } from "../API";

import Layout from "./Layout"

import '../css/address.css';

const DefaultZoom = 20;

const AddressAddPage = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('ca');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [postalAddress, setPostalAddress] = useState('');
    const [latitude, setLatitude] = useState(35.79839796311011);
    const [longitude, setLongitude] = useState(51.41385087540654);

    const [countryTitle, setCountryTitle] = useState('Canada');

    const handleSubmit = () => {
        SetAddress({
            title: title,
            recipient_full_name: name,
            phone_number: mobile,
            postal_code: postalCode,
            country: country.toUpperCase(),
            state: state,
            city: city,
            postal_address: postalAddress,
            latitude: latitude.toString().substring(0, 9),
            longitude: longitude.toString().substring(0, 9),
        });
    }

    const googleApiKey = 'AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLatitude(lat);
        setLongitude(lng);
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    return (
        <Layout>
            <div className="addaddress" id="addaddress">
                <h3 className="page-title">My Address/Add address</h3>
                <div className="form-control">
                    <label for="">Address title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label for="">Reciepient full name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label for="">Mobile</label>
                    <PhoneInput
                        className="phone"
                        inputClassName="phonenumber"
                        defaultCountry="ca"
                        value={mobile}
                        onChange={(mobile) => setMobile(mobile)}
                    />
                </div>
                <div className="form-control">
                    <label for="">Postal code</label>
                    <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <div className="form-control" id="country">
                    <label for="">Country</label>
                    <div className="country">
                        <CountrySelector
                            selectedCountry={country}
                            onSelect={({ iso2 }) => {
                                setCountry(iso2);
                                setTimeout(() => {
                                    const select = document.querySelector('#country .react-international-phone-country-selector-button').getAttribute('title');
                                    setCountryTitle(select);
                                }, 100)
                            }}
                        />
                        <input type="text" value={countryTitle} />
                    </div>
                </div>
                <div className="form-control">
                    <label for="">State</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="form-control">
                    <label for="">City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-control">
                    <label for="">Postal address</label>
                    <textarea rows="4" value={postalAddress} onChange={(e) => setPostalAddress(e.target.value)}></textarea>
                </div>
                <div className="form-control">
                    <MapPicker
                        defaultLocation={{
                            lat: latitude,
                            lng: longitude,
                        }}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{ height: '160px', width: '560px', margin: 'auto', borderRadius: '8px' }}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey={googleApiKey} />
                    <button className="btn choose">Choose On Map</button>
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