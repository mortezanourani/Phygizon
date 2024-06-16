import "./index.css";

import companyIcon from "./assets/company_icon.svg";

function SellerNewProductInfo() {
    const handleAddTag = (e) => {
        if (e.key === 'Enter') {
            const tagText = e.target.value.trim();
            if (!tagText) return;
            const tag = document.createElement('button');
            tag.classList.add("input-item");
            tag.innerText = tagText;
            tag.setAttribute("onClick", "{(e)=> {e.target.remove()}}");
            const tagsContainer = e.target.previousSibling.appendChild(tag);
            e.target.value = "";
        }
    }

    const handleremoveTag = (e) => {
        const tag = e.target;
        tag.remove();
    }

    return (
        <div className="seller-new-product-info">
            <div className="form-group">
                <h3 className="form-group-title">General Information</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-control">
                            <label>Title</label>
                            <div className="input-wrapper">
                                <input placeholder="Select" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group-col">
                    </div>
                </div>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Description</label>
                        <div className="input-wrapper">
                            <textarea placeholder="Enter a description"></textarea>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Tag</label>
                        <div className="input-wrapper">
                            <div className="items-container" onClick={handleremoveTag}>
                                <button className="input-item">Ladies Handbag</button>
                                <button className="input-item">Handbag</button>
                            </div>
                            <input placeholder="Enter tags" onKeyDown={handleAddTag} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Branding and NFT</h3>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Brand</label>
                        <div className="input-wrapper">
                            <input placeholder="Select" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>NFT</label>
                        <div className="input-wrapper">
                            <span className="input-prepend">https://</span>
                            <input placeholder="Enter NFT URL" />
                        </div>
                    </div>
                </div>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Private ID</label>
                        <div className="input-wrapper">
                            <input placeholder="Enter your ID" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Public ID (Phygizon)</label>
                        <div className="input-wrapper">
                            <input placeholder="" value="HandBag 125642" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Pricing and Stock</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>General Stock</label>
                                <div className="input-wrapper">
                                    <input placeholder="Select" />
                                    <span className="input-append">
                                        <button className="select-button"></button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label>General Price</label>
                                <div className="input-wrapper">
                                    <span className="input-prepend icon">$</span>
                                    <input placeholder="0.00" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-col">
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Discount Date</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>Discount Percent</label>
                                <div className="input-wrapper">
                                    <input placeholder="Select" />
                                    <span className="input-prepend">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 1.33594L1.33203 10.6693M2.9987 2.33594C2.9987 2.70413 2.70022 3.0026 2.33203 3.0026C1.96384 3.0026 1.66536 2.70413 1.66536 2.33594C1.66536 1.96775 1.96384 1.66927 2.33203 1.66927C2.70022 1.66927 2.9987 1.96775 2.9987 2.33594ZM10.332 9.66927C10.332 10.0375 10.0336 10.3359 9.66536 10.3359C9.29717 10.3359 8.9987 10.0375 8.9987 9.66927C8.9987 9.30108 9.29717 9.0026 9.66536 9.0026C10.0336 9.0026 10.332 9.30108 10.332 9.66927Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label>Discount</label>
                                <div className="input-wrapper">
                                    <span className="input-prepend icon">$</span>
                                    <input placeholder="0.00" />
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

            <div className="form-group">
                <h3 className="form-group-title">The Safe Keepers</h3>
                <div className="safe-keepers-list">
                    <table className="safe-keepers-table">
                        <tr>
                            <th>Choose</th>
                            <th>Company</th>
                            <th>Location or Address</th>
                            <th>Map</th>
                            <th>More action</th>
                        </tr>
                        <tr>
                            <td className="keeper-choose">
                                <label className="radio-button square">
                                    <input type="radio" name="safe-keeper" />
                                </label>
                            </td>
                            <td className="keeper-company">
                                <img src={companyIcon} alt="" />
                                Demis Sazan
                            </td>
                            <td className="keeper-location-address">
                                USA
                                <span>(Los Angles)</span>
                            </td>
                            <td>
                                <button className="map-button"></button>
                            </td>
                            <td>
                                <button className="delete-button"></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="keeper-choose">
                                <label className="radio-button square">
                                    <input type="radio" name="safe-keeper" />
                                </label>
                            </td>
                            <td className="keeper-company">
                                <img src={companyIcon} alt="" />
                                Dotin Keeper
                            </td>
                            <td className="keeper-location-address">
                                Austria
                                <span>(Vienna)</span>
                            </td>
                            <td>
                                <button className="map-button"></button>
                            </td>
                            <td>
                                <button className="delete-button"></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SellerNewProductInfo;