import { useSearchParams } from "react-router";
import { MovieCard, PageWrapper } from "../../components";
import { useSearchMovie } from "../../hooks/useSearchMovie";

export const SearchResult = () => {
    const [params] = useSearchParams();
    const query = params.get("q");
    const [movies, isLoading, error] = useSearchMovie(query);

    return (
        <PageWrapper
            pagetitle={`Results for '${query}'`}
            errorMsg={error}
            isLoading={isLoading}
        >
            <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
                <p className="p-8 mt-12 flex-1 text-center text-3xl text-gray-700 dark:text-gray-100 break-all">
                    {movies?.length === 0
                        ? `No results found for '${query}'`
                        : ""}
                </p>
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </section>
        </PageWrapper>
    );
};
