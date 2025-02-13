import { NavLink } from "react-router-dom";
import { SearchField } from "./SearchField";

export const navLinks = [
    { title: "Home", path: "/" },
    { title: "Popular", path: "/movies/popular" },
    { title: "Top Rated", path: "/movies/top" },
    { title: "Upcoming", path: "/movies/upcoming" },
];

export const NavBar = ({ open, onSearch }) => {
    return (
        <div
            className={`items-center justify-between ${
                !open ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
        >
            <SearchField onSearch={onSearch} className="mt-4 md:hidden" />
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navLinks.map((navLink) => (
                    <li key={navLink.title}>
                        <NavLink
                            to={navLink.title}
                            className={({ isActive }) =>
                                isActive ? "nav-link-active" : "nav-link"
                            }
                        >
                            {navLink.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
