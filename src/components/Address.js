import { Component } from "react";
import { DeleteAddress } from "../API";

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
                            <img src="/images/icons/icon.address.zip.svg" alt="" />
                            <p>{address.postal_code}</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.address.phone.svg" alt="" />
                            <p>+2-1547896632</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.address.svg" alt="" />
                            <p>{address.user}</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.address.number.svg" alt="" />
                            <p>{address.postal_code}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { AddressCard };