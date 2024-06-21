
import { useNavigate } from "react-router-dom";
import "./index.css";

import StepPointer from "./StepPointer";

function StepProgressBar({ step, handleSubmit }) {
    const navigate = useNavigate();
    const newProductURL = "/seller/products/add/";
    const newProductCategoryURL = newProductURL + "category/";
    const newProductInfoURL = newProductURL + "info/";
    const newProductMediaURL = newProductURL + "media/";
    const newProductPropertiesURL = newProductURL + "properties/";

    const handleBack = () => {
        switch (step) {
            case 2:
                return navigate(newProductCategoryURL);

            case 3:
                return navigate(newProductInfoURL);

            case 4:
                return navigate(newProductMediaURL);

            case 5:
                return navigate(newProductPropertiesURL);
        }
    }
    return (
        <div className="step-progress-wrapper">
            <div className="step-progress-navigator">
                <button
                    className="step-progress-button-back"
                    onClick={handleBack}
                    disabled={(step === 1) ? true : false}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8346 6.9974H1.16797M1.16797 6.9974L7.0013 12.8307M1.16797 6.9974L7.0013 1.16406" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back
                </button>

                <button className="step-progress-button-next" onClick={handleSubmit}>
                    {(step < 6) ? "Next" : "Submit"}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#FFFFFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="step-progress-steps">
                <StepPointer
                    step='1'
                    activeStep={step}
                    title='Step 1'
                    subtitle='Category' />

                <StepPointer
                    step='2'
                    activeStep={step}
                    title='Step 2'
                    subtitle='Info' />

                <StepPointer
                    step='3'
                    activeStep={step}
                    title='Step 3'
                    subtitle='Media' />

                <StepPointer
                    step='4'
                    activeStep={step}
                    title='Step 4'
                    subtitle='Properties' />

                <StepPointer
                    step='5'
                    activeStep={step}
                    title='Step 5'
                    subtitle='Specifications' />
            </div>

            <span className="steps-progress-bar">
                <span className="steps-progress-bar-line" style={{ width: `${(step / 5) * 100}%` }}></span>
            </span>
        </div>
    );
}

export default StepProgressBar;