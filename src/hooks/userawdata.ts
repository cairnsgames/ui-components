import { useState, useEffect } from "react";

const useRawData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        setLoading(true);
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }
    useEffect(() => {
        if (url) {
            fetchData();
        } else {
            setData([]);
        }
    }, [url]);

    return { data, isLoading: loading, isError: error, refetch: fetchData };
}

export default useRawData;