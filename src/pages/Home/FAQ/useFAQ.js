import { useEffect, useState } from "react";
import axios from "axios";

import { faqAPI } from "../../../global";

function useFAQ() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(faqAPI)
            .then((response) => {
                const faqs = response.data.results;
                setData(faqs);
            })
            .catch()
            .finally(() => setLoading(false));
    }, []);

    return { loading, data };
}

export default useFAQ;