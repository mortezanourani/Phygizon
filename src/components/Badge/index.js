import "./index.css";

function Badge(props) {
    const className = "badge-component " + props.type;

    return (
        <span className={className}></span>
    );
}

export default Badge;