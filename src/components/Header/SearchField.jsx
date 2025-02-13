import { useState } from "react";
import { SearchIcon } from "../../lib";

export const SearchField = ({ onSearch, className = "" }) => {
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(value);
        setValue("");
    };

    const onChange = (e) => {
        setValue(() => e.target.value);
    };

    return (
        <form className={`relative ${className}`} onSubmit={(e) => onSubmit(e)}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e)}
                required
            />
        </form>
    );
};
