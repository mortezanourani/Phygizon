import React from "react"
import Layout from "./Layout"

import '../css/address.css';
import { Addresses, DeleteAddress } from "../API";

const AddressPage = () => {
    const address = Addresses();

    return (
        <Layout>
            <div id="addresses">
                <div class="section-header">
                    <h3 class="page-title">Address</h3>
                    <a class="btn md ghost gray dark" href="/dashboard/address/add/">Add new address</a>
                </div>
                <div class="addresses-frame">
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
                                <div class="address">
                                    <span className="titlebar">
                                        <h3>{address.title}</h3>
                                        <menu>
                                            {/* <a href={"/dashboard/address/" + address.id + "/"} className="lnk sm">Edit</a> */}
                                            <a onClick={() => DeleteAddress(address.id)} className="lnk destruction sm">Delete</a>
                                        </menu>
                                    </span>
                                    <div>
                                        <span>
                                            <h3>{address.user}</h3>
                                            <p>{address.postal_address}</p>
                                        </span>
                                        <ul>
                                            <li>
                                                <img src="/images/icon.address.svg" alt="" />
                                                <p>{address.postal_code}</p>
                                            </li>
                                            <li>
                                                <img src="/images/icon.phone.svg" alt="" />
                                                <p>+2-1547896632</p>
                                            </li>
                                            <li>
                                                <img src="/images/icon.address.svg" alt="" />
                                                <p>{address.user}</p>
                                            </li>
                                            <li>
                                                <img src="/images/icon.postal.code.svg" alt="" />
                                                <p>{address.postal_code}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        )

                    }
                </div>
            </div>
        </Layout>
    )
}

export default AddressPage;