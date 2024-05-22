import { Component } from "react";
import { Addresses, DeleteAddress } from "../API";
import Loading from "./Loading";

import locationIcon from '../assets/icons/address/location_icon.svg';
import numberIcon from '../assets/icons/address/number_icon.svg';
import mobileIcon from '../assets/icons/address/mobile_icon.svg';
import userIcon from '../assets/icons/address/user_icon.svg';
import zipcodeIcon from '../assets/icons/address/zip_code_icon.svg';

function AddressesList() {
    const addresses = Addresses();
    return (
        addresses.loading
            ?
            <Loading />
            :
            !addresses.items.filter(address => address.is_active).length
                ?
                <h3 style={
                    {
                        color: '#505050',
                        textAlign: 'center',
                        padding: '24px 0',
                        border: '1px solid lightgray',
                        borderRadius: '12px',
                        marginTop: '32px'
                    }}>
                    There is no saved address.
                </h3>
                :
                addresses.items.filter(address => address.is_active).map(address => (
                    <AddressCard
                        address={address} />
                ))
    )
}

class AddressCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const address = this.props.address;

        return (
            <div className="address">
                <span className="titlebar">
                    <h3>{address.title}</h3>
                    <menu>
                        {/* <a href={"/dashboard/address/" + address.id + "/"} className="lnk sm">Edit</a> */}
                        <a onClick={() => DeleteAddress(address.id)} className="lnk destruction sm">Delete</a>
                    </menu>
                </span>
                <div>
                    <span>
                        <h3>{address.recipient_full_name}</h3>
                        <p>{address.postal_address}</p>
                    </span>
                    <ul>
                        <li>
                            <img src={zipcodeIcon} alt="" />
                            <p>{address.postal_code}</p>
                        </li>
                        <li>
                            <img src={mobileIcon} alt="" />
                            <p>{address.phone_number}</p>
                        </li>
                        <li>
                            <img src={userIcon} alt="" />
                            <p>{address.recipient_full_name}</p>
                        </li>
                        <li>
                            <img src={locationIcon} alt="" />
                            <p>{address.postal_code}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { AddressCard, AddressesList };