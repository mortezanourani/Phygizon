import { useState } from "react";
import StepProgressBar from "./StepProgressBar";

import "./index.css";

import SellerNewProductCategory from "./Step1";
import SellerNewProductInfo from "./Step2";
import SellerNewProductProperties from "./Step3";
import SellerNewProductSpecifications from "./Step4";
import { Outlet } from "react-router-dom";

function SellerNewProduct() {
    return (
        <div className="seller-add-product">
            <Outlet />
        </div>
    )
    // const [step, setStep] = useState(3);
    // const [data, setData] = useState({});

    // const handleBack = () => setStep(step - 1);
    // const handleNext = () => setStep(step + 1);

    // const handleAddProduct = () => {
    //     alert('added');
    // }

    // const renderContent = () => {
    //     switch (step) {
    //         case 1:
    //             return <SellerNewProductCategory
    //                 data={data?.category}
    //                 updateData={(category) =>
    //                     setData({ ...data, category })} />;

    //         case 2:
    //             return <SellerNewProductInfo
    //                 data={data?.info}
    //                 updateData={(info) =>
    //                     setData({ ...data, info })} />;

    //         case 3:
    //             return <SellerNewProductProperties
    //                 data={data?.properties}
    //                 updateData={(properties) =>
    //                     setData({ ...data, properties })} />;

    //         case 4:
    //             return <SellerNewProductSpecifications
    //                 data={data?.specifications}
    //                 updateData={(specifications) =>
    //                     setData({ ...data, specifications })} />;

    //         default:
    //             return <></>;
    //     }
    // }
    // return (
    //     <div className="seller-add-product">
    //         <StepProgressBar
    //             step={step}
    //             handleBack={handleBack}
    //             handleNext={handleNext}
    //             handleSubmit={handleAddProduct}
    //         />

    //         <>
    //             {JSON.stringify(data)}
    //             {renderContent()}
    //         </>
    //     </div>

    // )
}

export default SellerNewProduct;
