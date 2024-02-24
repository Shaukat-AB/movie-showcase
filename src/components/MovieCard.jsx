import { Link } from "react-router-dom";
import imgBackup from "../assets/405-image.jpg";

export const MovieCard = ({ movie }) => {
    const { id, original_title, title, overview, poster_path } = movie;
    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : imgBackup;

    return (
        <div className="m-4 mb-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/movie/${id}`}>
                <img
                    className="rounded-t-lg"
                    src={image}
                    alt={title || "405 image"}
                />
            </Link>
            <div className="p-5">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title || original_title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {overview?.length > 120
                        ? overview.slice(0, 120) + "..."
                        : overview}
                    {overview?.length > 120 && (
                        <Link
                            to={`/movie/${id}`}
                            className="px-1 hover:underline"
                        >
                            more
                        </Link>
                    )}
                </p>
            </div>
        </div>
    );
};
