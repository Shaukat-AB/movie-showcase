import { MovieCard, PageWrapper } from "../../components";
import { useGetMovies } from "../../hooks/useGetMovies";

export const ShowMovies = ({ apiPath, title }) => {
    const [movies, isLoading, error] = useGetMovies(apiPath);

    return (
        <PageWrapper pagetitle={title} isLoading={isLoading} errorMsg={error}>
            <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </section>
        </PageWrapper>
    );
};
