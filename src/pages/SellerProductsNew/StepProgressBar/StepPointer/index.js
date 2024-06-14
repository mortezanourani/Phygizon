
import "./index.css";

import normalIcon from "./assets/progressbar_normal_step_icon.svg";
import activeIcon from "./assets/progressbar_active_step_icon.svg";
import passedIcon from "./assets/progressbar_passed_step_icon.svg";
import { useState } from "react";

function StepPointer(props) {

    const className = () => {
        let baseClassName = "step-progress-steps-step";
        let passedClassName = baseClassName + " passed";
        let activeClassName = baseClassName + " active";

        if (props.step > props.activeStep)
            return baseClassName;

        if (props.step < props.activeStep)
            return passedClassName;

        return activeClassName;
    }

    const pointerIcon = () => {
        if (props.step > props.activeStep)
            return normalIcon;

        if (props.step < props.activeStep)
            return passedIcon;

        return activeIcon;
    }

    return (
        <div className={className()}>
            <img src={pointerIcon()} alt="" />
            <span>
                <h4 className="step-progress-step-title">{props.title}</h4>
                <p className="step-progress-step-subtitle">{props.subtitle}</p>
            </span>
        </div>
    )
}

export default StepPointer;