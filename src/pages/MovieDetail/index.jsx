import { useParams } from 'react-router';
import { MovieImage, Spinner } from '../../components';
import { useGetMovieById } from '../../hooks/useGetMovieById';
import { StarIcon } from '../../lib';
import { useTitle } from '../../hooks/useTitle';

export const MovieDetail = () => {
  const params = useParams();
  const id = params['id'];
  const { data: movie, isLoading } = useGetMovieById(id);
  const documentTitle = useTitle(movie?.title || 'Not Found');

  if (isLoading || !Array.isArray(movie)) return <Spinner />;

  return (
    <section className="max-w-7xl mx-auto py-8 flex flex-wrap gap-4 justify-center xl:justify-start">
      <div className="max-w-sm">
        <MovieImage
          className="rounded-t-lg"
          path={movie?.poster_path}
          title={movie?.title || '405 image'}
        />
      </div>
      <div className="ml-3 max-w-2xl text-gray-700 dark:text-gray-100">
        <h1 className="text-4xl font-bold my-4 text-center lg:text-left">
          {movie?.title}
        </h1>
        <p className="py-4">{movie?.overview}</p>
        <p className="py-8 flex flex-wrap gap-3">
          {movie?.genres &&
            movie?.genres.map((genre) => (
              <span
                key={genre.id}
                className="p-2 border border-gray-200 rounded-sm dark:border-gray-600"
              >
                {genre.name}
              </span>
            ))}
        </p>
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 text-yellow-300 me-1" />
          <p className="ms-2 text-gray-900 dark:text-white">
            {movie?.vote_average}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {movie?.vote_count}
          </span>
        </div>
        <p className="py-4">
          <span className="font-bold">RunTime:</span>
          <span className="mx-2">{movie?.runtime} min.</span>
        </p>
        <p className="py-4">
          <span className="font-bold">Budget:</span>
          <span className="mx-2">
            {movie?.budget < 1 ? 'unknown' : movie?.budget}
          </span>
        </p>
        <p className="py-4">
          <span className="font-bold">Revenue:</span>
          <span className="mx-2">
            {movie?.revenue < 1 ? 'unknown' : movie?.revenue}
          </span>
        </p>
        <p className="py-4">
          <span className="font-bold">Release_date:</span>
          <span className="mx-2">{movie?.release_date}</span>
        </p>
        <p className="py-4">
          <span className="font-bold">IMDB:</span>
          <a
            className="mx-2 hover:underline"
            href={`https://www.imdb.com/title/${movie?.imdb_id}`}
            target="_blank"
            rel="noreferrer"
          >
            {movie?.imdb_id}
          </a>
        </p>
      </div>
    </section>
  );
};
