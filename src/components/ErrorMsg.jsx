import { TbAlertCircleFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export const ErrorMsg = ({ msg = null }) => {
    return (
        <div className="max-w-7xl mt-12 mx-auto p-8 flex flex-col items-center gap-5">
            <TbAlertCircleFilled className="w-12 h-12 text-red-600" />
            <p className="text-center text-3xl text-gray-700 dark:text-gray-100">
                {msg ? msg : "Something went wrong"}, please reload this page to
                retry!
            </p>
            <Link
                reloadDocument
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline"
            >
                or go back to home page
            </Link>
        </div>
    );
};
