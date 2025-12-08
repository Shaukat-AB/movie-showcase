import { createSearchReqURL } from '../api';
import { useAxios } from './useAxios';

export const useSearchMovie = (query = '', pageParam = 1) => {
  return useAxios(createSearchReqURL(query, pageParam));
};
