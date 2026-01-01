import { MovieCard, Spinner, Metadata } from '../../components';
import { useGetMovies } from '../../hooks/useGetMovies';

export const ShowMovies = ({ apiPath, title }) => {
  const { data: movies, isLoading } = useGetMovies(apiPath);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Metadata title={title} />
      <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
        {Array.isArray(movies) &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
    </>
  );
};
