import { Link } from "react-router-dom";
import { navLinks } from "../Header/NavBar";

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer>
            <div className="w-full mx-auto max-w-screen-xl flex flex-wrap-reverse gap-4 justify-center  md:justify-between items-center px-4 py-8">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {currentYear}{" "}
                    <Link to="/" className="footer-link">
                        Movie ShowCase - Home
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap gap-4 md:gap-6 items-center text-gray-500 dark:text-gray-400 sm:mt-0">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link to={link.path} className="footer-link">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
