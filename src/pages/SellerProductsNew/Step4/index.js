import "./index.css";

import StepProgressBar from "../StepProgressBar";

import percentIcon from "../../../assets/icons/inputs/percent_icon.svg";

import { useEffect, useState } from "react";
import { ItemSelectInput, MultiSelectInput, NumberInput, SelectInput } from "../../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";

function SellerNewProductProperties() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('sellerNewProductJSON')));
    const [variants, setVariants] = useState([]);
    const [currentVariant, setCurrentVariant] = useState();

    useEffect(() => {
        localStorage.setItem('sellerNewProductJSON', JSON.stringify(product));
    }, [product]);

    useEffect(() => {
        setProduct({ ...product, variants: variants });
    }, [variants]);

    useEffect(() => {
        setVariants([...variants].unshift(currentVariant));
    }, [currentVariant]);

    const [brands, setBrands] = useState();
    const [colors, setColors] = useState();
    const [materials, setMaterials] = useState();

    if (!product?.id)
        return <Navigate to="/seller/products/add/category/" />;

    const handleChange = (name, value) => {
        setCurrentVariant({ ...currentVariant, [name]: value });
        // setProduct({ ...product, [name]: value });
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
                                prepend="logo"
                                placeholder="Select"
                                options={[
                                    { id: 1, name: "Michael Kors", logo: "" },
                                    { id: 2, name: "Gucci", logo: "" },
                                    { id: 3, name: "Luigi Botto", logo: "" },
                                    { id: 4, name: "Swarovski", logo: "" }]}
                                value={brands}
                                onChange={(e) => setBrands(e.target.value)} />
                        </div>

                        <div className="form-group-col">
                            <MultiSelectInput
                                id="color"
                                name="color"
                                label="Color"
                                prepend="color"
                                placeholder="Select"
                                options={[
                                    { id: 1, name: 'Pink', color: "#FD73CE" },
                                    { id: 2, name: 'Blue', color: "#5696F5" },
                                    { id: 3, name: 'Green', color: "#66CD64" },
                                    { id: 4, name: 'Red', color: "#FF0000" },
                                    { id: 5, name: 'Yellow', color: "#FFE600" },
                                    { id: 6, name: 'Purple', color: "#D884FF" },
                                    { id: 7, name: 'Orange', color: "#F79B2F" }]}
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
                                    { id: 1, name: 'Phoenix Baker' },
                                    { id: 2, name: 'Linen' },
                                    { id: 3, name: 'Lana Steiner' },
                                    { id: 4, name: 'Demi Wilkinson' },
                                    { id: 5, name: 'Candice Wu' },
                                    { id: 6, name: 'Natali Craig' },
                                    { id: 7, name: 'Drew Cano' }]}
                                value={materials}
                                onChange={(e) => setMaterials(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="form-group-title">Variants</h3>
                    <div className="from-group-row">
                        <div className="variants-list">
                            <img className="variant-image" />
                            <ItemSelectInput
                                name="brand"
                                label="Brand"
                                prepend="logo"
                                options={JSON.parse(brands ?? null)}
                                value={JSON.parse(currentVariant?.brand ?? null)}
                                onChange={(e) => handleChange('brand', e.target.value)} />

                            <ItemSelectInput
                                name="color"
                                label="Color"
                                prepend="color"
                                options={JSON.parse(colors ?? null)}
                                value={JSON.parse(currentVariant?.color ?? null)}
                                onChange={(e) => handleChange('color', e.target.value)} />

                            <ItemSelectInput
                                name="material"
                                label="Material"
                                options={JSON.parse(materials ?? null)}
                                value={JSON.parse(currentVariant?.material ?? null)}
                                onChange={(e) => handleChange('material', e.target.value)} />

                            <NumberInput
                                id="stock"
                                name="stock"
                                label="Stock"
                                placeholder="0"
                                value={currentVariant?.stock}
                                onChange={(e) => handleChange('stock', e.target.value)} />

                            <NumberInput
                                id="weight"
                                name="weight"
                                label="Weight"
                                placeholder="0"
                                append="gr"
                                value={currentVariant?.weight}
                                onChange={(e) => handleChange('weight', e.target.value)} />

                            <NumberInput
                                id="length"
                                name="length"
                                label="Length"
                                placeholder="0"
                                append="mm"
                                value={currentVariant?.length}
                                onChange={(e) => handleChange('length', e.target.value)} />

                            <NumberInput
                                id="width"
                                name="width"
                                label="Width"
                                placeholder="0"
                                append="mm"
                                value={currentVariant?.width}
                                onChange={(e) => handleChange('width', e.target.value)} />

                            <NumberInput
                                id="height"
                                name="height"
                                label="Height"
                                placeholder="0"
                                append="mm"
                                value={currentVariant?.height}
                                onChange={(e) => handleChange('height', e.target.value)} />

                            <NumberInput
                                id="price"
                                name="price"
                                label="Price"
                                placeholder="0.00"
                                prepend="$"
                                value={currentVariant?.price}
                                onChange={(e) => handleChange('price', e.target.value)} />

                            <NumberInput
                                id="discount"
                                name="discount"
                                label="Discount"
                                placeholder="0.00"
                                append={<img src={percentIcon} alt="" />}
                                value={currentVariant?.discount}
                                onChange={(e) => handleChange('discount', e.target.value)} />

                            <NumberInput
                                name="discount"
                                label="Discount"
                                placeholder="0.00"
                                prepend="$"
                                disabled={true}
                                value={(currentVariant?.discount * currentVariant?.price / 100)?.toFixed(2)} />

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
        </>
    );
}

export default SellerNewProductProperties;