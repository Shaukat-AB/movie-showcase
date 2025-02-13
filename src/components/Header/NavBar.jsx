import { NavLink } from "react-router-dom";
import { SearchField } from "./SearchField";

export const NavBar = ({ open, onSearch }) => {
    const activeNav =
        "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactiveNav =
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        <div
            className={`items-center justify-between ${
                !open ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
        >
            <SearchField onSearch={onSearch} className="mt-4 md:hidden" />
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeNav : inactiveNav
                        }
                        aria-current="page"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/movies/popular"
                        className={({ isActive }) =>
                            isActive ? activeNav : inactiveNav
                        }
                    >
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/movies/top"
                        className={({ isActive }) =>
                            isActive ? activeNav : inactiveNav
                        }
                    >
                        Top Rated
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/movies/upcoming"
                        className={({ isActive }) =>
                            isActive ? activeNav : inactiveNav
                        }
                    >
                        Upcoming
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
