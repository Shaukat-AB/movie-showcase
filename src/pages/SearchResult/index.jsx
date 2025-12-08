import { useSearchParams } from 'react-router';
import { MovieCard, Spinner } from '../../components';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { useTitle } from '../../hooks/useTitle';

export const SearchResult = () => {
  const [params] = useSearchParams();
  const query = params.get('q');
  const [movies, isLoading] = useSearchMovie(query);
  const documentTitle = useTitle(`Results for '${query}'`);

  if (isLoading) return <Spinner />;

  return (
    <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
      {movies?.length === 0 ? (
        <p className="p-8 mt-12 flex-1 text-center text-3xl text-gray-700 dark:text-gray-100 break-all">
          {`No results found for '${query}'`}
        </p>
      ) : (
        ''
      )}

      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
