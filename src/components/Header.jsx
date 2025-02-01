import { NavLink, Link, useNavigate } from "react-router-dom";
import { TbSearch, TbMenu2, TbSun, TbMoon } from "react-icons/tb";
import Logo from "../assets/movie-logo.svg";
import { useState } from "react";
import { SearchField } from "./SearchField";
import { useLocalDarmode } from "../hooks/useLocalDarmode";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [darkmode, setDarkmode] = useLocalDarmode()
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate(`/search?q=${value}`);
    };

    return (
        <header>
            <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-slate-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src={Logo} className="h-8" alt="Movie Showcase" />
                        <span className="hidden lg:inline-block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Movie Showcase
                        </span>
                    </Link>
                    <div className="flex md:order-2 sm:ml-0 ml-auto">
                        <button
                            type="button"
                            className="mx-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={() => setDarkmode(!darkmode)}
                        >
                            <span className="sr-only">
                                Change Theme Light/Dark
                            </span>
                            {!darkmode ? (
                                <TbSun className="w-5 h-5" />
                            ) : (
                                <TbMoon />
                            )}
                        </button>

                        <button
                            type="button"
                            data-collapse-toggle="navbar-search"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                            onClick={() => setOpen(() => !open)}
                        >
                            <TbSearch className="w-5 h-5" />
                            <span className="sr-only">Search</span>
                        </button>
                        {/* Search Field for Medium or larger screens*/}

                        <SearchField
                            onSearch={onSearch}
                            className="hidden md:block"
                        />
                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            onClick={() => setOpen(!open)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <TbMenu2 className="w-5 h-5" />
                        </button>
                    </div>

                    <Menu open={open} onSearch={onSearch} />
                </div>
            </nav>
        </header>
    );
};

const Menu = ({ open, onSearch }) => {
    const activeNav =
        "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactiveNav =
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        <div
            className={`items-center justify-between ${
                !open ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
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
