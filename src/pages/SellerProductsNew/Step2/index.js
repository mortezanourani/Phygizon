import "./index.css";

import companyIcon from "./assets/company_icon.svg";
import { ItemsInput, MultilineInput, SelectInput, TextInput } from "../../../components/Input";
import { useEffect, useState } from "react";
import StepProgressBar from "../StepProgressBar";
import { Navigate, useNavigate } from "react-router-dom";

function SellerNewProductInfo() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('sellerNewProductJSON')));

    useEffect(() => {
        localStorage.setItem('sellerNewProductJSON', JSON.stringify(product));
    }, [product]);

    if (!product?.category)
        return <Navigate to="/seller/products/add/category" />;

    const handleChange = async (name, value) => {
        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = async () => {
        if (product?.id) {
            // Call seller_product_update API
            return navigate("/seller/products/add/media/");
        } else {
            // Call seller_product_add API to create New Product

            // Then add created product Id to product JSON in product state value
            await handleChange('id', 1)
                .finally(() => {
                    return navigate("/seller/products/add/media/");
                });
        }

    }

    return (
        <>
            <StepProgressBar
                step={2}
                handleSubmit={handleSubmit} />

            {JSON.stringify(product)}
            <div className="seller-new-product-info">
                <div className="form-group">
                    <h3 className="form-group-title">General Information</h3>
                    <div className="form-group-row">
                        <div className="form-group-col">
                            <TextInput
                                id="title"
                                name="title"
                                label="Title"
                                placeholder="Select"
                                value={product?.title}
                                onChange={(e) => handleChange('title', e.target.value)} />
                        </div>
                        <div className="form-group-col">
                        </div>
                    </div>
                    <div className="form-group-row">
                        <MultilineInput
                            id="description"
                            name="description"
                            label="Description"
                            placeholder="Enter description"
                            value={product?.description}
                            onChange={(e) => handleChange('description', e.target.value)} />

                        <ItemsInput
                            id="tags"
                            name="tags"
                            label="Tags"
                            placeholder="Enter Tags"
                            value={product?.tags}
                            onChange={(e) => handleChange('tags', e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="form-group-title">NFT and Requirement</h3>
                    <div className="form-group-row">
                        <TextInput
                            id="nft"
                            name="nft_link"
                            label="NFT"
                            placeholder="Enter URL"
                            prepend="https://"
                            value={product?.nft_link}
                            onChange={(e) => handleChange('nft_link', e.target.value)} />

                        <div className="form-group-row">
                            <SelectInput
                                id="nft-required"
                                name="nft_required"
                                label="NFT Requirement"
                                options={[
                                    { key: "Is Required", value: "ture" },
                                    { key: "Is not Required", value: "false" }]}
                                value={product?.nft_required}
                                onChange={(e) => handleChange('nft_required', e.target.value)} />

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
        </>
    );
}

export default SellerNewProductInfo;