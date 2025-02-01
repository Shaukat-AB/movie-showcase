import { useAxios } from "./useAxios";

export const useGetMovies = (apiPath, pageParam = 1) => {
    const [movies, isLoading, error] = useAxios(
        `${apiPath}?language=en-US&page=${pageParam}&`
    );

    return [movies, isLoading, error];
};
