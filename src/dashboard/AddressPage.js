import React from "react"
import { Addresses } from "../API";
import { AddressesList } from "../components/Address";

import Layout from "./Layout"

import '../css/address.css';


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
                    <AddressesList />
                </div>
            </div>
        </Layout>
    )
}

export default AddressPage;
