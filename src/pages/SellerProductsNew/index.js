import { useState } from "react";
import StepProgressBar from "./StepProgressBar";

import "./index.css";

import SellerNewProductCategory from "./Step1";
import SellerNewProductInfo from "./Step2";
import SellerNewProductProperties from "./Step3";
import SellerNewProductSpecifications from "./Step4";

function SellerNewProduct() {
    const [step, setStep] = useState(1);

    const handleBack = () => setStep(step - 1);
    const handleNext = () => setStep(step + 1);

    const handleAddProduct = () => {
        alert('added');
    }

    const renderContent = () => {
        switch (step) {
            case 1:
                return <SellerNewProductCategory />;

            case 2:
                return <SellerNewProductInfo />;

            case 3:
                return <SellerNewProductProperties />;

            case 4:
                return <SellerNewProductSpecifications />;

            default:
                return <></>;
        }
    }
    return (
        <div className="seller-add-product">
            <StepProgressBar
                step={step}
                handleBack={handleBack}
                handleNext={handleNext}
                handleSubmit={handleAddProduct}
            />

            <>
                {renderContent()}
            </>
        </div>

    )
}

export default SellerNewProduct;
