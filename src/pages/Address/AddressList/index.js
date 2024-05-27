import { Addresses } from "../../../API";
import AddressCard from "./AddressCard";

import Loading from "../../../components/Loading";
import "./index.css";

function AddressList() {
    const addresses = Addresses();
    return (
        addresses.loading
            ?
            <Loading component />
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

export default AddressList;