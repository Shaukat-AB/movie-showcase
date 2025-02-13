import { Route, Routes } from "react-router-dom";
import { ShowMovies, MovieDetail, SearchResult, NotFound } from "../pages";

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
            <Route path="/movies">
                <Route
                    path="popular"
                    element={
                        <ShowMovies apiPath="movie/popular" title="Popular" />
                    }
                />
                <Route
                    path="top"
                    element={
                        <ShowMovies apiPath="movie/top_rated" title="Top" />
                    }
                />
                <Route
                    path="upcoming"
                    element={
                        <ShowMovies apiPath="movie/upcoming" title="Upcoming" />
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
