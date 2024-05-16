import React from "react"
import Layout from "./Layout"

import '../css/address.css';
import { Addresses, DeleteAddress } from "../API";
import { AddressCard } from "../components/Address";

const AddressPage = () => {
    const address = Addresses();

    return (
        <Layout>
            <div id="addresses">
                <div className="section-header">
                    <h3 className="page-title">Address</h3>
                    <a className="btn md ghost gray dark" href="/dashboard/address/add/">Add new address</a>
                </div>
                <div className="addresses-frame">
                    {
                        address.count === null ? (
                            <div>
                                Loading...
                            </div>
                        ) : address.count === 0 ? (
                            <div>
                                There is no address.
                            </div>
                        ) : (
                            address.items.map(address => (
                                <AddressCard
                                    address={address} />
                            ))
                        )

                    }
                </div>
            </div>
        </Layout>
    )
}

export default AddressPage;
