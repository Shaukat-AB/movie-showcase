import { Route, Routes } from "react-router-dom";
import { ShowMovies, MovieDetail, SearchResult } from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ShowMovies apiPath="movie/now_playing" title="Home" />
                }
            />
            <Route
                path="/search"
                element={<SearchResult apiPath="search/movie" />}
            />
            <Route
                path="/movie/:id"
                element={<MovieDetail apiPath="movie" />}
            />
            <Route
                path="/movies/popular"
                element={<ShowMovies apiPath="movie/popular" title="Popular" />}
            />
            <Route
                path="/movies/top"
                element={<ShowMovies apiPath="movie/top_rated" title="Top" />}
            />
            <Route
                path="/movies/upcoming"
                element={
                    <ShowMovies apiPath="movie/upcoming" title="Upcoming" />
                }
            />
        </Routes>
    );
};

export default AppRoutes;
