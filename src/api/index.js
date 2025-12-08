export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

// API Paths
export const apiPath = {
  searchAPIPath: 'search/movie',
  movieDetailAPIPath: 'movie',
  movieNowPlayingAPIPath: 'movie/now_playing',
  moviePopularAPIPath: 'movie/popular',
  movieTopRatedAPIPath: 'movie/top_rated',
  movieUpcomingAPIPath: 'movie/upcoming',
};

// Default url params
const defaultSearchParams = '&include_adult=false&language=en-US&';
const defaultMovieParams = 'language=en-US';

// Create Base URL
export const createReqURL = (path) => {
  if (typeof path != 'string') {
    return '';
  }
  return `${BASE_URL}${path}api_key=${API_KEY}`;
};

// Create Search URL
export const createSearchReqURL = (query, pageParam = 1) => {
  return `${apiPath.searchAPIPath}?query=${query}${defaultSearchParams}page=${pageParam}&`;
};

// Create Movie detail URL
export const createMovieByIdReqURL = (movieId) => {
  return `${apiPath.movieDetailAPIPath}/${movieId}?`;
};

// Create Movie URL
export const createMoviesReqURL = (path, pageParam) => {
  return `${path}?${defaultMovieParams}&page=${pageParam}&`;
};
