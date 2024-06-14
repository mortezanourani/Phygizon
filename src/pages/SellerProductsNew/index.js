import { useState } from "react";
import StepProgressBar from "./StepProgressBar";

import "./index.css";

import SellerNewProductCategory from "./Step1";
import SellerNewProductInfo from "./Step2";

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
