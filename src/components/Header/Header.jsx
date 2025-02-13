import { NavBar } from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchField } from "./SearchField";
import { useLocalDarmode } from "../../hooks/useLocalDarmode";
import { MenuIcon, MoonIcon, SunIcon, SearchIcon } from "../../lib";
import Logo from "../../assets/movie-logo.svg";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [darkmode, setDarkmode] = useLocalDarmode();
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
                                <SunIcon className="w-5 h-5" />
                            ) : (
                                <MoonIcon />
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
                            <SearchIcon className="w-5 h-5" />
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
                            <MenuIcon className="w-5 h-5" />
                        </button>
                    </div>

                    <NavBar open={open} onSearch={onSearch} />
                </div>
            </nav>
        </header>
    );
};
