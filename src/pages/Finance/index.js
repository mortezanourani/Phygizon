import { useState } from "react";

import './index.css';

import Payment from "./Payment";
import Wallet from "./Wallet";

const btnClass = "btn md text gray";
const activeBtnClass = "btn md gray ghost active";

function Finance() {
    const [finance, setFinance] = useState('payment');

    return (
        <div className="finance">
            <nav className="finance-navbar">
                <button
                    onClick={() => setFinance('payment')}
                    className={((finance === 'payment') ? activeBtnClass : btnClass)}>
                    Payment History
                </button>
                <button
                    onClick={() => setFinance('wallet')}
                    className={((finance === 'wallet') ? activeBtnClass : btnClass)}>
                    Wallet
                </button>
            </nav>
            {
                finance === 'payment'
                    ? <Payment />
                    : <Wallet />
            }
        </div>
    );
}

export default Finance;