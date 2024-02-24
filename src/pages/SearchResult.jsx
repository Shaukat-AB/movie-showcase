import { useSearchParams } from "react-router-dom";
import { MovieCard, Spinner, ErrorMsg } from "../components";
import { useAxios } from "../hooks/useAxios";
import { useTitle } from "../hooks/useTitle";

export const SearchResult = ({ apiPath }) => {
    const [params] = useSearchParams();
    const query = params.get("q");
    const [movies, isLoading, error] = useAxios(
        `${apiPath}?query=${query}&include_adult=false&language=en-US&page=1&`
    );
    // update document Title
    const documentTitle = useTitle(`Results for '${query}'`);

    if (isLoading) return <Spinner />;
    if (error) return <ErrorMsg msg={error} />;

    return (
        <section className="max-w-7xl mx-auto py-8 flex flex-wrap justify-center xl:justify-start">
            <p className="p-8 mt-12 flex-1 text-center text-3xl text-gray-700 dark:text-gray-100 break-all">
                {movies?.length === 0 ? `No results found for '${query}'` : ""}
            </p>
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
};
