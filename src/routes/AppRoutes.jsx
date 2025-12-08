import { Route, Routes } from 'react-router';
import { ShowMovies, MovieDetail, SearchResult, NotFound } from '../pages';
import { apiPath } from '../api';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShowMovies apiPath={apiPath.movieNowPlayingAPIPath} title="Home" />
        }
      />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/movies">
        <Route
          path="popular"
          element={
            <ShowMovies apiPath={apiPath.moviePopularAPIPath} title="Popular" />
          }
        />
        <Route
          path="top"
          element={
            <ShowMovies apiPath={apiPath.movieTopRatedAPIPath} title="Top" />
          }
        />
        <Route
          path="upcoming"
          element={
            <ShowMovies
              apiPath={apiPath.movieUpcomingAPIPath}
              title="Upcoming"
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
