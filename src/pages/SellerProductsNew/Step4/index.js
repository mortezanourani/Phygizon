import "./index.css";

function SellerNewProductSpecifications() {
    return (
        <div className="seller-new-product-specifications">
            <div className="form-group">
                <h3 className="form-group-title">Region</h3>
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Manufacturing Country</label>
                        <div className="input-wrapper">
                            <input placeholder="None" />
                            <span className="input-append">
                                <button className="select-button"></button>
                            </span>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Country of Origin</label>
                        <div className="input-wrapper">
                            <input placeholder="None" />
                            <span className="input-append">
                                <button className="select-button"></button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-control">
                        <label>Region</label>
                        <div className="input-wrapper">
                            <input placeholder="None" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Season of Use</label>
                        <div className="input-wrapper">
                            <select>
                                <option>All Season</option>
                                <option>Spring</option>
                                <option>Summer</option>
                                <option>Autumn</option>
                                <option>Winter</option>
                            </select>
                            <span className="input-append">
                                <button className="select-button"></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Date and Time</h3>
                <div className="form-group-row">
                    <div className="form-group-col">
                        <div className="form-group-row sm-nowrap">
                            <div className="form-control">
                                <label>Date of Manufacture</label>
                                <div className="input-wrapper">
                                    <input placeholder="None" />
                                    <span className="input-append">
                                        <button className="calendar-button"></button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label>Expiration Date</label>
                                <div className="input-wrapper">
                                    <input placeholder="None" />
                                    <span className="input-append">
                                        <button className="calendar-button"></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-col">

                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Product Delivery</h3>
                <div className="form-group-row">
                    <div className="form-group-row sm-nowrap">
                        <div className="form-control">
                            <label>Preparation Time</label>
                            <div className="input-wrapper">
                                <input placeholder="Days" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label>Shipping Cost</label>
                            <div className="input-wrapper">
                                <span className="input-prepend icon">$</span>
                                <input placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group-row sm-nowrap">
                        <div className="form-control">
                            <label>Insurance</label>
                            <div className="input-wrapper">
                                <input placeholder="Has it" disabled />
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label>Warranty</label>
                            <div className="input-wrapper">
                                <input placeholder="Has it" disabled />
                                <span className="input-append">
                                    <button className="select-button"></button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-row sm-nowrap">
                        <div className="form-control">
                            <label>Warranty Amount</label>
                            <div className="input-wrapper">
                                <span className="input-prepend icon">$</span>
                                <input placeholder="Enter Number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h3 className="form-group-title">Product Performance</h3>
            </div>
        </div>
    );
}

export default SellerNewProductSpecifications;