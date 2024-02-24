import { MovieCard, Spinner, ErrorMsg } from "../components";
import { useAxios } from "../hooks/useAxios";
import { useTitle } from "../hooks/useTitle";

export const ShowMovies = ({ apiPath, title }) => {
    const [movies, isLoading, error] = useAxios(`${apiPath}?language=en-US&page=1&`);
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
