import { MovieCard, Spinner } from '../../components';
import { useGetMovies } from '../../hooks/useGetMovies';
import { useTitle } from '../../hooks/useTitle';

export const ShowMovies = ({ apiPath, title }) => {
  const [movies, isLoading] = useGetMovies(apiPath);
  const documentTitle = useTitle(title);

  if (isLoading) return <Spinner />;

  return (
    <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
      {Array.isArray(movies) &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </section>
  );
};
