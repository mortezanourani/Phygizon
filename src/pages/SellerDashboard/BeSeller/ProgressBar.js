
function ProgressBar(props) {
    const progress = ((props.step / 7) * 100);
    return (
        <div className="progress-bar">
            <p>Step {props.step} of 7</p>
            <span className="line">
                <span className="progress" style={{ width: `${progress}%` }}></span>
            </span>
        </div>
    )
}

export default ProgressBar;