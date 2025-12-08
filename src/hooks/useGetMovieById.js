import { createMovieByIdReqURL } from '../api';
import { useAxios } from './useAxios';

export const useGetMovieById = (id) => {
  return useAxios(createMovieByIdReqURL(id));
};
