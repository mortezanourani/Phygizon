import { useEffect, useState } from "react";
import { headers, userProfileInfoAPI } from "./apiUrls";
import axios from "axios";

function useProfileInfo() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(userProfileInfoAPI, { headers })
            .then((response) => {
                const profileInfo = response.data;
                setData(profileInfo);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return { loading, data, error };
}

export default useProfileInfo;