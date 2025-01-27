
import Badge from "../../../../components/Badge";
import "./index.css";

function PaymentsTable(props) {
    return (
        <div>
            <div className="table-container">
                <table className="seller-payment-histoy-table">
                    <tr>
                        <th>Order</th>
                        <th>Payment Type</th>
                        <th>Ammount</th>
                        <th>Status</th>
                        <th>Attach</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td className="order-number">
                            245612
                        </td>
                        <td className="payment-type">Wallet</td>
                        <td className="payment-amount">$3.00</td>
                        <td>
                            <Badge type="completed" />
                        </td>
                        <td></td>
                        <td className="payment-time">2023-05-21 10:23:14</td>
                    </tr>
                    <tr>
                        <td className="order-number">
                            245765
                        </td>
                        <td className="payment-type">Wallet</td>
                        <td className="payment-amount">$13.00</td>
                        <td>
                            <Badge type="waiting" />
                        </td>
                        <td>
                            <Badge type="nft" />
                        </td>
                        <td className="payment-time">2023-03-12 21:23:14</td>
                    </tr>
                    <tr>
                        <td className="order-number">
                            23968
                        </td>
                        <td className="payment-type">Paypal</td>
                        <td className="payment-amount">$349.00</td>
                        <td>
                            <Badge type="expired" />
                        </td>
                        <td></td>
                        <td className="payment-time">2023-03-01 11:53:25</td>
                    </tr>
                </table>
            </div>
            <div className="table-navigator">
                <button className="previous" disabled>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8346 6.9974H1.16797M1.16797 6.9974L7.0013 12.8307M1.16797 6.9974L7.0013 1.16406" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Previous
                </button>
                <div className="steps">
                    <button disabled>1</button>
                </div>
                <button className="next" disabled>
                    Next
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default PaymentsTable;