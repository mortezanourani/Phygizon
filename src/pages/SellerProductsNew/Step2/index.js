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
            const tagsContainer = e.target.previousSibling;
            tagsContainer.appendChild(tag);
            e.target.value = "";
        }
    }

    const handleremoveTag = (e) => {
        const target = e.target.tagName.toLowerCase();
        if (target !== "button") return;
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
                <h3 className="form-group-title">NFT and Requirement</h3>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>NFT</label>
                        <div className="input-wrapper">
                            <span className="input-prepend">https://</span>
                            <input placeholder="Enter NFT URL" />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-control">
                            <label>NFT Requirement</label>
                            <div className="input-wrapper">
                                <select>
                                    <option value={true}>Is Required</option>
                                    <option value={false}>Is Not Required</option>
                                </select>
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                        </div>
                        <div className="form-control"></div>
                    </div>
                </div>
            </div>

            {/* <div className="form-group">
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
            </div> */}
        </div>
    );
}

export default SellerNewProductInfo;