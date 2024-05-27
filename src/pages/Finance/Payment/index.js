import './index.css';

const Payment = () => {
    return (
        <>
            <div className="export">
                <p>Lorem ipsum is simply dummy text of the ...</p>
                <button className="btn lg ghost">Export</button>
                <button className="btn lg icon gary">
                    <img src="/images/icons/icon.finance.svg" alt="" />
                </button>
            </div>
            <div className="records">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th>Order</th>
                        <th>Payment Type</th>
                        <th>Ammount</th>
                        <th>Status</th>
                        <th>Attach</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td><img src="" alt="" />245612</td>
                        <td>Wallet</td>
                        <td>$3.00</td>
                        <td>
                            <span className="badge red">Expired</span>
                        </td>
                        <td></td>
                        <td>2023-05-21 10:23:14</td>
                    </tr>
                    <tr>
                        <td><img src="" alt="" />245612</td>
                        <td>Paypall</td>
                        <td>$10.00</td>
                        <td>
                            <span className="badge green">Completed</span>
                        </td>
                        <td></td>
                        <td>2023-05-21 10:23:14</td>
                    </tr>
                    <tr>
                        <td><img src="" alt="" />245612</td>
                        <td>Credit Card</td>
                        <td>$30.00</td>
                        <td>
                            <span className="badge red">Expired</span>
                        </td>
                        <td><span className="badge gray">NFT</span></td>
                        <td>2023-05-21 10:23:14</td>
                    </tr>
                    <tr>
                        <td><img src="" alt="" />245612</td>
                        <td>Wallet</td>
                        <td>$3.00</td>
                        <td>
                            <span className="badge red">Expired</span>
                        </td>
                        <td></td>
                        <td>2023-05-21 10:23:14</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Payment;