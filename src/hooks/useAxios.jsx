import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (apiPath) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = `https://api.themoviedb.org/3/${apiPath}api_key=${import.meta.env.VITE_API_KEY}`;

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const { data: movieData } = await axios.get(url);
                // if results list undefined than set state to movieData
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
