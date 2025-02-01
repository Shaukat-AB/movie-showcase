import { useAxios } from "./useAxios";

export const useSearchMovie = (apiPath, query = "", pageParam = 1) => {
    const [movies, isLoading, error] = useAxios(
        `${apiPath}?query=${query}&include_adult=false&language=en-US&page=${pageParam}&`
    );
    return [movies, isLoading, error];
};
