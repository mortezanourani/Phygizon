import { useEffect, useState } from "react";
import axios from "axios";

import { getCartAPI, addToCartAPI, removeFromCartAPI, apiHeaders } from "./apiUrls";

function useCart() {
    const [loading, setLoading] = useState(true);

    const [status, setStatus] = useState(null);
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios.get(getCartAPI,
            { headers: apiHeaders })
            .then(response => {
                let data = response.data;
                setStatus(data.status);
                setItems(data.items);
                setTotalPrice(data.total_price);
            })
            .catch(error => {
                console.log('cart error: ' + error.message);
            })
            .finally(() => setLoading(false));
    }, []);

    const addToCart = (itemId) => {
        axios.post(addToCartAPI,
            { "product": itemId },
            { headers: apiHeaders })
            .then(response => {
                /* Display error box */
                alert('Product got added to your cart.');
            })
            .catch(error => {
                let errorCode = error.response.status;
                switch (errorCode) {
                    case (401):
                        /* Display error box */
                        alert('You need to be logged in.');
                        break;
                    default:
                        /* Display error box */
                        alert(error.response.data.message);
                }
            });
    }

    const removeFromCart = (itemId) => {
        axios.patch(removeFromCartAPI,
            { "product": itemId },
            { headers: apiHeaders })
            .then(response => {
                if (response.status === 200) {
                    alert('Product got removed from your cart.');
                }
            })
            .catch(error => {
                let errorCode = error.response.status;
                switch (errorCode) {
                    case (401):
                        /* Display erro box */
                        alert('You need to be logged in.');
                        break;
                    case (500):
                        /* Display erro box */
                        alert('This product is not in your cart.');
                        break;
                    default:
                        /* Display erro box */
                        alert(error.response.status);
                }
            });
    }

    return {
        cart: {
            loading,
            status,
            items,
            totalPrice
        },
        addToCart,
        removeFromCart
    }
}

export default useCart;