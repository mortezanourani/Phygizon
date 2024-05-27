import { Addresses } from "../../API";
import AddressList from "./AddressList";

import './index.css';

const Address = () => {
    const address = Addresses();

    return (
        <div id="addresses">
            <div className="section-header">
                <h3 className="page-title">Address</h3>
                <a className="btn md ghost gray dark" href="/dashboard/address/add/">Add new address</a>
            </div>
            <div className="addresses-frame">
                <AddressList />
            </div>
        </div>
    )
}

export default Address;
