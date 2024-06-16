
import "./index.css";

import CategorySelector from "./CategorySelector";

import searchIcon from "../../../assets/icons/search_icon.svg";

function SellerNewProductCategory() {
    return (
        <div className="seller-new-product-category">
            <div className="form-group">
                <div className="form-group-row">
                    <div className="form-control">
                        <label>Category</label>
                        <div className="input-wrapper">
                            <span className="input-prepend icon">
                                <img src={searchIcon} alt="" />
                            </span>
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>

            <CategorySelector />

            <hr />

            <div className="form-group">
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
            </div>
        </div>
    )
}

export default SellerNewProductCategory;