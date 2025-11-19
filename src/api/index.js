export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

// API Paths
export const searchAPIPath = 'search/movie';
export const movieDetailAPIPath = 'movie';
export const movieNowPlayingAPIPath = 'movie/now_playing';
export const moviePopularAPIPath = 'movie/popular';
export const movieTopRatedAPIPath = 'movie/top_rated';
export const movieUpcomingAPIPath = 'movie/upcoming';

// Default url params
const defaultSearchParams = '&include_adult=false&language=en-US&';
const defaultMovieParams = 'language=en-US';

// Create Base URL
export const createReqURL = (apiPath) => {
  if (typeof apiPath != 'string') {
    return '';
  }
  return `${BASE_URL}${apiPath}api_key=${API_KEY}`;
};

// Create Search URL
export const createSearchReqURL = (query, pageParam = 1) => {
  return `${searchAPIPath}?query=${query}${defaultSearchParams}page=${pageParam}&`;
};

// Create Movie detail URL
export const createMovieByIdReqURL = (movieId) => {
  return `${movieDetailAPIPath}/${movieId}?`;
};

// Create Movie URL
export const createMoviesReqURL = (apiPath, pageParam) => {
  return `${apiPath}?${defaultMovieParams}&page=${pageParam}&`;
};
