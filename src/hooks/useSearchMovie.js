import { createSearchReqURL } from "../api";
import { useAxios } from "./useAxios";

export const useSearchMovie = (query = "", pageParam = 1) => {
    const [movies, isLoading, error] = useAxios(
        createSearchReqURL(query, pageParam)
    );
    return [movies, isLoading, error];
};
