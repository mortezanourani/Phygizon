import { useEffect, useState } from "react";
import axios from "axios";

import { addressAPI } from "./apiUrls";

function Addresses() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(addressAPI, {
            headers: apiHeaders,
        })
            .then(response => {
                const addresses = response.data.results;
                setData(addresses);
            })
            .catch()
            .finally(() => setLoading(false));
    }, []);

    return { loading, data };
}

export default Addresses;
