
import "./index.css";

import CategorySelector from "./CategorySelector";

import searchIcon from "../../../assets/icons/search_icon.svg";
import { SearchInput } from "../../../components/Input";
import { useState } from "react";

function SellerNewProductCategory({ data, updateData }) {
    const handleChange = (e) => {
        updateData(e.target.value);
    }

    return (
        <div className="seller-new-product-category">
            <div className="form-group">
                <div className="form-group-row">
                    <SearchInput
                        id="category"
                        name="category"
                        label="Category"
                        value={data}
                        onChange={handleChange} />
                </div>
            </div>

            <CategorySelector
                onChange={handleChange} />

            {/* <hr /> */}

            {/* <div className="form-group">
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Sub Category</label>
                        <div className="input-wrapper">
                            <span className="input-prepend icon">
                                <img src={searchIcon} alt="" />
                            </span>
                            <input placeholder="Search" />
                            <span className="input-append">
                                <button className="select-button"></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SellerNewProductCategory;