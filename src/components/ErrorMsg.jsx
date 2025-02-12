import { Link } from "react-router-dom";
import { AlertIcon } from "../lib";

export const ErrorMsg = ({ msg = null }) => {
    return (
        <div className="max-w-7xl mx-auto w-full min-h-[80vh] flex flex-col items-center justify-center gap-4">
            <AlertIcon className="w-12 h-12 text-red-600" />
            <h1 className="text-4xl text-gray-900 dark:text-gray-100 mb-8">
                Something went wrong!
            </h1>
            <p className="text-center text-4xl text-gray-700 dark:text-gray-100">
                {msg ? msg : "Something went wrong"}
            </p>
            <Link
                reloadDocument
                to="/"
                className="text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline"
            >
                go to home page
            </Link>
        </div>
    );
};
