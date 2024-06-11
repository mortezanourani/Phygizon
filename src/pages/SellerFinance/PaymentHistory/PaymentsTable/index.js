
import Tag from "../../../../components/Tag";
import "./index.css";

function PaymentsTable(props) {
    return (
        <>
            <table className="payment-histoy-records-table" cellspacing="0" cellpadding="0">
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
                        <Tag type="completed" />
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
                        <span className="tag waiting"></span>
                    </td>
                    <td>
                        <Tag type="nft" />
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
                        <Tag type="expired" />
                    </td>
                    <td></td>
                    <td className="payment-time">2023-03-01 11:53:25</td>
                </tr>

                <tr>
                    <td colSpan="6" className="navigator-row">
                        <div className="navigator">
                            <button className="previous" disabled>
                                <svg width="14" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8346 6.9974H1.16797M1.16797 6.9974L7.0013 12.8307M1.16797 6.9974L7.0013 1.16406" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Previous
                            </button>
                            <div className="steps">
                                <button disabled>1</button>
                            </div>
                            <button className="next" disabled>
                                Next
                                <svg width="14" height="14" viewBox="-3 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default PaymentsTable;