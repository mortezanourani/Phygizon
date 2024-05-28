import { Payments } from "../../API";
import Loading from "../../components/Loading";

function PaymentMethods(props) {
    const payment = Payments();
    return (
        (payment.loading) ?
            <Loading component />
            :
            payment.methods.map(method => (
                (method.is_active)
                    ?
                    <div className="payment-method">
                        <input type="radio" name="method" id={method.code} value={method.code} onChange={props.onChange} />
                        <label for={method.code}>
                            <div className="radio-button">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L3.5 6.5L1 4" stroke="white" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </div>
                            <div className="payment-method-info">
                                <h3 className="name">{method.name}</h3>
                                <p className="desc">{method.description}</p>
                                <span className="set-default">
                                    <h3 className="text">Set as default</h3>
                                    <a className="lnk cta">Edit</a>
                                </span>
                            </div>
                            <div className="payment-method-logo">
                                <img src={method.logo} alt={method.name} />
                            </div>

                        </label>
                    </div>
                    : null
            ))
    )
}

export default PaymentMethods;
