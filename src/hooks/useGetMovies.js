import { createMoviesReqURL } from '../api';
import { useAxios } from './useAxios';

export const useGetMovies = (apiPath, pageParam = 1) => {
  return useAxios(createMoviesReqURL(apiPath, pageParam));
};
