import { useEffect, useState } from "react";
import axios from "axios";
import { createReqURL } from "../api";

export const useAxios = (apiPath) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const url = createReqURL(apiPath);
                const { data: movieData } = await axios.get(url);
                setData(() =>
                    movieData.results ? movieData.results : movieData
                );
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [apiPath]);

    return [data, loading, error];
};
