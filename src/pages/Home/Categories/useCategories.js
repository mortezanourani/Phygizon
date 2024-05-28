import { useEffect, useState } from "react";
import axios from "axios";

import { categoriesAPI } from "../../../global";

function useCategories() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(categoriesAPI)
            .then((response) => {
                const categories = response.data.results;
                setData(categories.filter(item => item.parent === null));
            })
            .catch()
            .finally(() => setLoading(false));
    }, []);

    return { loading, data };
}

export default useCategories;