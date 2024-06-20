import { NumberInput, SelectInput, TextInput } from "../../../components/Input";
import "./index.css";

function SellerNewProductSpecifications(props) {
    return (
        <div className="seller-new-product-specifications">
            {JSON.stringify(props.value)}

            <div className="form-group">
                <h3 className="form-group-title">Region</h3>
                <div className="form-group-row">
                    <SelectInput
                        id="manufacturing-country"
                        name="manufacturing_country"
                        title="Manufaturing Country"
                        options={[
                            { key: "Is Required", value: "ture" },
                            { key: "Is not Required", value: "false" }]}
                        value={props.value?.manufacturing_country}
                        onChange={props.onChange} />

                    <SelectInput
                        id="country-of-origin"
                        name="country_of_origin"
                        title="Country of Origin"
                        options={[
                            { key: "Is Required", value: "ture" },
                            { key: "Is not Required", value: "false" }]}
                        value={props.value?.country_of_origin}
                        onChange={props.onChange} />
                </div>

                <div className="form-group-row">
                    <TextInput
                        id="region"
                        name="region"
                        title="Region"
                        placeholder="Region"
                        value={props.value?.region}
                        onChange={props.onChange} />

                    <SelectInput
                        id="season-of-use"
                        name="season_of_use"
                        title="Season of Use"
                        options={[
                            { key: "All Season", value: "0" },
                            { key: "Spring", value: "1" },
                            { key: "Summer", value: "2" },
                            { key: "Autumn", value: "3" },
                            { key: "Winter", value: "4" }]}
                        value={props.value?.season_of_use}
                        onChange={props.onChange} />
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
                        <NumberInput
                            id="preparation-time"
                            name="preparation_time"
                            title="Preparation Time"
                            placeholder="Days Number"
                            value={props.value?.preparation_time}
                            onChange={props.onChange} />

                        <NumberInput
                            id="shipping-cost"
                            name="shipping_cost"
                            title="Shipping Cost"
                            prepend="$"
                            placeholder="0.00"
                            value={props.value?.shipping_cost}
                            onChange={props.onChange} />
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
                        <NumberInput
                            id="warranty-amount"
                            name="warranty_amount"
                            title="Warranty Amount"
                            prepend="$"
                            placeholder="0.00"
                            value={props.value?.warranty_amount}
                            onChange={props.onChange} />
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