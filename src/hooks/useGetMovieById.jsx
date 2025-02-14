import { createMovieByIdReqURL } from "../api";
import { useAxios } from "./useAxios";

export const useGetMovieById = (id) => {
    const [movie, isLoading, error] = useAxios(createMovieByIdReqURL(id));

    return [movie, isLoading, error];
};
