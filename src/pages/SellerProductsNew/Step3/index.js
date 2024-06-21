import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

import StepProgressBar from "../StepProgressBar";

import "./index.css";
import { UploadIcon, DeleteIcon } from "./assets/uploader_buttons";

function SellerNewProductMeida() {
    const navigate = useNavigate();
    const imagesContainer = useRef(null);
    const videosContainer = useRef();
    const vrContainer = useRef();

    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('sellerNewProductJSON')));

    useEffect(() => {
        localStorage.setItem('sellerNewProductJSON', JSON.stringify(product));
    }, [product]);

    useEffect(() => {
        if (imagesContainer.current) {
            imagesContainer.current.querySelectorAll('input').forEach(input => {
                input.setAttribute('accept', 'image/jpeg, image/png');
            });
        };

        if (videosContainer.current) {
            videosContainer.current.querySelectorAll('input').forEach(input => {
                input.setAttribute('accept', 'video/mp4');
            });
        };

        if (vrContainer.current) {
            vrContainer.current.querySelectorAll('input').forEach(input => {
                input.setAttribute('accept', 'image/jpeg, image/png, image/jpg, image/gif');
            });
        };
    }, []);

    if (!product?.id)
        return <Navigate to="/seller/products/add/category/" />;

    const handleChange = (img) => {
        console.log(img);
        // setProduct({ ...product, [name]: value });
    }

    const handleSubmit = () => {
        // Call seller_product_update API
        return navigate("/seller/products/add/properties/");
    }

    return (
        <>
            <StepProgressBar
                step={3}
                handleSubmit={handleSubmit} />

            <div className="seller-new-product-media">
                <div className="seller-new-product-media-section">
                    <span className="seller-new-product-media-section-label">
                        <label>Product Images</label>
                        <p>
                            Supports JPEG and PNG. Maximum file size of 1MB. The height and length should be 1000x1000 Pixel.
                        </p>
                    </span>
                    <div className="seller-new-product-media-images" ref={imagesContainer}>
                        <div className="media-cover-item media-cover-tag">
                            <ImageUploader
                                onFileAdded={(img) => handleChange(img)}
                                deleteIcon={<DeleteIcon />}
                                uploadIcon={<UploadIcon />}
                            />
                        </div>
                        <div className="media-other-items">
                            <div className="media-placeholder">
                                <ImageUploader
                                    onFileAdded={(img) => handleChange(img)}
                                    deleteIcon={<DeleteIcon />}
                                    uploadIcon={<UploadIcon />}
                                />
                            </div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                        </div>
                    </div>
                </div>

                <div className="seller-new-product-media-section">
                    <span className="seller-new-product-media-section-label">
                        <label>Product Video</label>
                        <p>
                            Your Video must be Mp4. Maximum file size of 10MB. The height and length should be 1000x1000 Pixel.
                        </p>
                    </span>
                    <div className="seller-new-product-media-video" ref={videosContainer}>
                        <div className="media-cover-item">
                            <ImageUploader
                                deleteIcon={<DeleteIcon />}
                                uploadIcon={<UploadIcon />}
                            />
                        </div>
                        <div className="media-other-items">
                            <ImageUploader
                                onFileAdded={(img) => handleChange(img)}
                                deleteIcon={<DeleteIcon />}
                                uploadIcon={<UploadIcon />}
                            />
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                            <div className="media-placeholder"></div>
                        </div>
                    </div>
                </div>

                <div className="seller-new-product-media-section">
                    <span className="seller-new-product-media-section-label">
                        <label>VR or 360 Picture</label>
                        <p>Supports svg picture, Maximum file size of 10MB.</p>
                    </span>
                    <div className="seller-new-product-media-vr" ref={vrContainer}>
                        <div className="media-cover-item">
                            <ImageUploader
                                deleteIcon={<DeleteIcon />}
                                uploadIcon={<UploadIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SellerNewProductMeida;