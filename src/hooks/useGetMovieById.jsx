import { useAxios } from "./useAxios";

export const useGetMovieById = (apiPath, id) => {
    const [movie, isLoading, error] = useAxios(`${apiPath}/${id}?`);

    return [movie, isLoading, error];
};
