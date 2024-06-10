
import "./index.css";

function BalanceItem(props) {
    return (
        <div className="seller-wallet-balance-item">
            <img src={props.icon} alt="" />
            <span>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </span>
        </div>
    )
}

export default BalanceItem;