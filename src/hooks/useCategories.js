import { useEffect, useState } from "react";
import axios from "axios";

import { categoriesAPI } from "./apiUrls";

function useCategories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(categoriesAPI)
            .then((response) => {
                const categories = response.data.results;
                setData(categories);
            })
            .catch()
            .finally(() => setLoading(false));
    }, []);

    return { loading, data };
}

export default useCategories;