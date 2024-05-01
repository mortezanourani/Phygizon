import React from "react";
import Layout from "./Layout";
import axios from "axios";

const CartPage = () => {

    axios.get('https://phygizone.darkube.app/v1/order/carts/', {
        headers: {
            'accept': 'application/json',
            'Authorization': localStorage.getItem('authorization')
        }
    }).then(response => {
        document.getElementById('root').innerHTML = JSON.stringify(response.data.results);
    }).catch(error => {
        alert(error);
    });

    return (
        <Layout>

        </Layout>
    )
}

export default CartPage;