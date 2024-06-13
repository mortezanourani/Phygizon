import "./index.css";

import filterButtonIcon from "./assets/button_filter_icon.svg";

import ProductsTable from "./ProductsTable";

function SellerProducts() {
    return (
        <div className="seller-products">
            <div className="seller-export-section">
                <lable>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</lable>
                <div className="seller-export-menu">
                    <button className="btn ghost xl export">Export</button>
                    <button className="btn ghost gray xl filter">
                        <img src={filterButtonIcon} alt="" />
                    </button>
                </div>
            </div>

            <ProductsTable />
        </div>
    );
}

export default SellerProducts;