import { MovieCard, Spinner, ErrorMsg } from "../../components";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useTitle } from "../../hooks/useTitle";

export const ShowMovies = ({ apiPath, title }) => {
    const [movies, isLoading, error] = useGetMovies(apiPath);

    // update document Title
    const documentTitle = useTitle(title);

    if (isLoading) return <Spinner />;
    if (error) return <ErrorMsg msg={error} />;

    return (
        <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
};
