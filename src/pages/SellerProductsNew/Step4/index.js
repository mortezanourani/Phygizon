import "./index.css";

import StepProgressBar from "../StepProgressBar";

import percentIcon from "../../../assets/icons/inputs/percent_icon.svg";

import { useEffect, useState } from "react";
import { MultiSelectInput, NumberInput } from "../../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";

function SellerNewProductProperties() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('sellerNewProductJSON')));

    useEffect(() => {
        localStorage.setItem('sellerNewProductJSON', JSON.stringify(product));
    }, [product]);

    const [brands, setBrands] = useState();
    const [colors, setColors] = useState();
    const [materials, setMaterials] = useState();

    if (!product?.id)
        return <Navigate to="/seller/products/add/category/" />;

    const handleChange = (name, value) => {
        return;
    }

    const handleSubmit = () => {
        return navigate("/seller/products/add/specifications/");
    }

    return (
        <>
            <StepProgressBar
                step={4}
                handleSubmit={handleSubmit} />

            <div className="seller-new-product-properties">
                <div className="form-group">
                    <h3 className="form-group-title">Properties</h3>
                    <div className="form-group-row properties-container">
                        <div className="form-group-col">
                            <MultiSelectInput
                                id="brand"
                                name="brand"
                                label="Brand"
                                placeholder="Select"
                                options={[
                                    { key: "Michael Kors" },
                                    { key: "Gucci" },
                                    { key: "Luigi Botto" },
                                    { key: "Swarovski" }]}
                                value={brands}
                                onChange={(e) => setBrands(e.target.value)} />
                        </div>

                        <div className="form-group-col">
                            <MultiSelectInput
                                id="color"
                                name="color"
                                label="Color"
                                className="prepend"
                                placeholder="Select"
                                options={[
                                    { key: 'Pink', value: "#FD73CE" },
                                    { key: 'Blue', value: "#5696F5" },
                                    { key: 'Green', value: "#66CD64" },
                                    { key: 'Red', value: "#FF0000" },
                                    { key: 'Yellow', value: "#FFE600" },
                                    { key: 'Purple', value: "#D884FF" },
                                    { key: 'Orange', value: "#F79B2F" }]}
                                value={colors}
                                onChange={(e) => setColors(e.target.value)} />
                        </div>

                        <div className="form-group-col">
                            <MultiSelectInput
                                id="material"
                                name="material"
                                label="Material"
                                placeholder="Select"
                                options={[
                                    { key: 'Phoenix Baker' },
                                    { key: 'Linen' },
                                    { key: 'Lana Steiner' },
                                    { key: 'Demi Wilkinson' },
                                    { key: 'Candice Wu' },
                                    { key: 'Natali Craig' },
                                    { key: 'Drew Cano' }]}
                                value={materials}
                                onChange={(e) => setMaterials(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="form-group-title">Packaging Dimensions</h3>
                    <div className="form-group-row">
                        <NumberInput
                            id="length"
                            name="length"
                            label="Length"
                            placeholder="0"
                            append="mm"
                            value={product?.length}
                            onChange={(e) => handleChange('length', e.target.value)} />

                        <NumberInput
                            id="width"
                            name="width"
                            label="Width"
                            placeholder="0"
                            append="mm"
                            value={product?.width}
                            onChange={(e) => handleChange('length', e.target.value)} />

                        <NumberInput
                            id="height"
                            name="height"
                            label="Height"
                            placeholder="0"
                            append="mm"
                            value={product?.height}
                            onChange={(e) => handleChange('height', e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-row">
                        <NumberInput
                            id="weight"
                            name="weight"
                            label="Weight"
                            placeholder="0"
                            append="gr"
                            value={product?.weight}
                            onChange={(e) => handleChange('weight', e.target.value)} />

                        <div className="form-control"></div>
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="form-group-title">Pricing and Stock</h3>
                    <div className="form-group-row">
                        <div className="form-group-col">
                            <div className="form-group-row sm-nowrap">
                                <NumberInput
                                    id="stock"
                                    name="stock"
                                    label="Stock"
                                    placeholder="0"
                                    value={product?.stock}
                                    onChange={(e) => handleChange('stock', e.target.value)} />

                                <NumberInput
                                    id="price"
                                    name="price"
                                    label="Price"
                                    placeholder="0.00"
                                    prepend="$"
                                    value={product?.price}
                                    onChange={(e) => handleChange('price', e.target.value)} />
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
                                <NumberInput
                                    id="discount"
                                    name="discount"
                                    label="Discount"
                                    placeholder="0.00"
                                    append={<img src={percentIcon} alt="" />}
                                    value={product?.discount}
                                    onChange={(e) => handleChange('discount', e.target.value)} />

                                <NumberInput
                                    name="discount"
                                    label="Discount"
                                    placeholder="0.00"
                                    prepend="$"
                                    disabled={true}
                                    value={(product?.discount * product?.price / 100)?.toFixed(2)} />
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
        </>
    );
}

export default SellerNewProductProperties;