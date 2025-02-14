import { createMoviesReqURL } from "../api";
import { useAxios } from "./useAxios";

export const useGetMovies = (apiPath, pageParam = 1) => {
    const [movies, isLoading, error] = useAxios(
        createMoviesReqURL(apiPath, pageParam)
    );

    return [movies, isLoading, error];
};
