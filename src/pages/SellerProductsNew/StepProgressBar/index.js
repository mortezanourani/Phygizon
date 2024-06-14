
import "./index.css";

import StepPointer from "./StepPointer";

function StepProgressBar(props) {
    return (
        <div className="step-progress-wrapper">
            <div className="step-progress-navigator">
                <button
                    className="step-progress-button-back"
                    onClick={props.handleBack}
                    disabled={(props.step === 1) ? true : false}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8346 6.9974H1.16797M1.16797 6.9974L7.0013 12.8307M1.16797 6.9974L7.0013 1.16406" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back
                </button>

                {
                    (props.step < 6) ?
                        <button className="step-progress-button-next" onClick={props.handleNext}>
                            Next
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#FFFFFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        :
                        <button className="step-progress-button-submit" onClick={props.handleSubmit}>
                            Submit
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#FFFFFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                }
            </div>

            <div className="step-progress-steps">
                <StepPointer
                    step='1'
                    activeStep={props.step}
                    title='Step 1'
                    subtitle='Category' />

                <StepPointer
                    step='2'
                    activeStep={props.step}
                    title='Step 2'
                    subtitle='Info' />

                <StepPointer
                    step='3'
                    activeStep={props.step}
                    title='Step 3'
                    subtitle='Properties' />

                <StepPointer
                    step='4'
                    activeStep={props.step}
                    title='Step 4'
                    subtitle='Specification' />

                <StepPointer
                    step='5'
                    activeStep={props.step}
                    title='Step 5'
                    subtitle='Media' />

                <StepPointer
                    step='6'
                    activeStep={props.step}
                    title='Step 6'
                    subtitle='Review' />
            </div>

            <span className="steps-progress-bar">
                <span className="steps-progress-bar-line" style={{ width: `${(props.step / 6) * 100}%` }}></span>
            </span>
        </div>
    );
}

export default StepProgressBar;