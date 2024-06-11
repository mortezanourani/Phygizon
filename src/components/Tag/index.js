import "./index.css";

function Tag(props) {
    const className = "tag " + props.type;

    return (
        <span className={className}></span>
    );
}

export default Tag;