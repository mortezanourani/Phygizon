import "./index.css";

import newPropertyButtonIcon from "../../../assets/icons/button/select_button_arrow.svg";
import { useState } from "react";

function SellerNewProductProperties() {
    const handleAddBrand = (e) => {
        const brandText = e.target.value.trim();
        const brand = document.createElement('button');
        brand.classList.add("input-item");
        brand.innerText = brandText;
        const brandsContainer = e.target.parentNode.nextSibling.firstChild;
        brandsContainer.appendChild(brand);
        e.target.value = "Select";
    }

    const handleAddColor = (e) => {
        const colorText = e.target.options[e.target.selectedIndex].text.trim();
        const colorColor = e.target.value.trim();
        const colorIcon = document.createElement('span');
        colorIcon.style.backgroundColor = colorColor;
        const color = document.createElement('button');
        color.classList.add("input-item");
        color.innerText = colorText;
        color.prepend(colorIcon);
        const colorsContainer = e.target.parentNode.nextSibling.firstChild;
        colorsContainer.appendChild(color);
        e.target.value = "Select";
    }

    const handleAddMaterial = (e) => {
        const materialText = e.target.value.trim();
        const material = document.createElement('button');
        material.classList.add("input-item");
        material.innerText = materialText;
        const materialsContainer = e.target.parentNode.nextSibling.firstChild;
        materialsContainer.appendChild(material);
        e.target.value = "Select";
    }


    const handleremoveItem = (e) => {
        const type = e.target.tagName.toLowerCase();
        if (type !== "button") return;
        const brand = e.target;
        brand.remove();
    }

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    return (
        <div className="seller-new-product-properties">
            <div className="form-group">
                <h3 className="form-group-title">Properties</h3>
                <div className="form-group-row properties-container">
                    <div className="form-group-col">
                        <div className="form-control">
                            <label>Brand</label>
                            <div className="input-wrapper">
                                <select onChange={handleAddBrand}>
                                    <option>Select</option>
                                    <option>Mortiza</option>
                                    <option>Heliza</option>
                                    <option>Morilia</option>
                                </select>
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                            <div className="input-wrapper">
                                <div className="items-container" onClick={handleremoveItem}>
                                    <button className="input-item">Ladies Handbag</button>
                                    <button className="input-item">Handbag</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group-col">
                        <div className="form-control">
                            <label>Color</label>
                            <div className="input-wrapper">
                                <select onChange={handleAddColor}>
                                    <option>Select</option>
                                    <option value="#FD73CE">
                                        <span style={{ backgroundColor: "#FD73CE" }}></span>
                                        Pink</option>
                                    <option value="#5696F5">
                                        <span style={{ backgroundColor: "#5696F5" }}></span>
                                        Blue</option>
                                    <option value="#66CD64">
                                        <span style={{ backgroundColor: "#66CD64" }}></span>
                                        Green</option>
                                    <option value="#FF0000">
                                        <span style={{ backgroundColor: "#FF0000" }}></span>
                                        Red</option>
                                    <option value="#FFE600">
                                        <span style={{ backgroundColor: "#FFE600" }}></span>
                                        Yellow</option>
                                    <option value="#D884FF">
                                        <span style={{ backgroundColor: "#D884FF" }}></span>
                                        Purple</option>
                                    <option value="#F79B2F">
                                        <span style={{ backgroundColor: "#F79B2F" }}></span>
                                        Orange</option>
                                </select>
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                            <div className="input-wrapper">
                                <div className="items-container" onClick={handleremoveItem}>
                                    <button className="input-item">
                                        <span style={{ backgroundColor: "#66CD64" }}></span>
                                        Green</button>
                                    <button className="input-item"><span style={{ backgroundColor: "#FFE600" }}></span>
                                        Yellow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group-col">
                        <div className="form-control">
                            <label>Brand</label>
                            <div className="input-wrapper">
                                <select onChange={handleAddMaterial}>
                                    <option>Select</option>
                                    <option>Phoenix Baker</option>
                                    <option>Linen</option>
                                    <option>Lana Steiner</option>
                                    <option>Demi Wilkinson</option>
                                    <option>Candice Wu</option>
                                    <option>Natali Craig</option>
                                    <option>Drew Cano</option>
                                </select>
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                            <div className="input-wrapper">
                                <div className="items-container" onClick={handleremoveItem}>
                                    <button className="input-item">Phoenix Baker</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Packaging Dimensions</h3>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Length</label>
                        <div className="input-wrapper">
                            <input placeholder="0" />
                            <span className="input-append">
                                <p>mm</p>
                            </span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Width</label>
                        <div className="input-wrapper">
                            <input placeholder="0" />
                            <span className="input-append">
                                <p>mm</p>
                            </span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Height</label>
                        <div className="input-wrapper">
                            <input placeholder="0" />
                            <span className="input-append">
                                <p>mm</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Weight</label>
                        <div className="input-wrapper">
                            <input placeholder="0" />
                            <span className="input-append">
                                <p>gr</p>
                            </span>
                        </div>
                    </div>
                    <div className="form-control"></div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Pricing and Stock</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>Stock</label>
                                <div className="input-wrapper">
                                    <input placeholder="0" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label>Price</label>
                                <div className="input-wrapper">
                                    <span className="input-prepend icon">$</span>
                                    <input placeholder="0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-col">
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Discount and Expiry Date</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>Discount Percent</label>
                                <div className="input-wrapper">
                                    <input placeholder="Select" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                    <span className="input-append">
                                        <p>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6654 1.33594L1.33203 10.6693M2.9987 2.33594C2.9987 2.70413 2.70022 3.0026 2.33203 3.0026C1.96384 3.0026 1.66536 2.70413 1.66536 2.33594C1.66536 1.96775 1.96384 1.66927 2.33203 1.66927C2.70022 1.66927 2.9987 1.96775 2.9987 2.33594ZM10.332 9.66927C10.332 10.0375 10.0336 10.3359 9.66536 10.3359C9.29717 10.3359 8.9987 10.0375 8.9987 9.66927C8.9987 9.30108 9.29717 9.0026 9.66536 9.0026C10.0336 9.0026 10.332 9.30108 10.332 9.66927Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label>Discount</label>
                                <div className="input-wrapper">
                                    <span className="input-prepend icon">$</span>
                                    <input placeholder="0.00" value={discount * 10} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>Start Date</label>
                                <div className="input-wrapper">
                                    <input placeholder="Select" />
                                    <span className="input-append">
                                        <button className="calendar-button"></button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label>Expiry Date</label>
                                <div className="input-wrapper">
                                    <input placeholder="Select" />
                                    <span className="input-append">
                                        <button className="calendar-button"></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerNewProductProperties;