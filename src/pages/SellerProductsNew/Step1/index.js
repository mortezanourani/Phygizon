import "./index.css";

import StepProgressBar from "../StepProgressBar";

import CategorySelector from "./CategorySelector";

import searchIcon from "../../../assets/icons/search_icon.svg";
import { SearchInput } from "../../../components/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerNewProductCategory() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('sellerNewProductJSON')));

    useEffect(() => {
        localStorage.setItem('sellerNewProductJSON', JSON.stringify(product));
    }, [product]);

    const handleChange = (e) => {
        setProduct({ ...product, 'category': e.target.value });
    }

    const handleSubmit = () => {
        if (product?.id) {
            // Call seller_product_update to change category
        }

        navigate("/seller/products/add/info/");
    }

    return (
        <>
            <StepProgressBar
                step={1}
                handleSubmit={handleSubmit} />

            <div className="seller-new-product-category">
                <div className="form-group">
                    <div className="form-group-row">
                        <SearchInput
                            id="category"
                            name="category"
                            label="Category"
                            value={product?.category}
                            onChange={handleChange} />
                    </div>
                </div>

                <CategorySelector
                    onChange={handleChange} />
            </div>
        </>
    )
}

export default SellerNewProductCategory;