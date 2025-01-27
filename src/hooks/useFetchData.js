import { useState, useEffect } from "react";
import axios from "axios";

import { headers } from "./apiUrls";

function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        axios.get(url, { headers })
            .then(response => {
                setData(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetchData;