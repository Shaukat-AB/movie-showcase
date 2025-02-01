import { useState, useEffect } from "react";

const initialmode = JSON.parse(localStorage.getItem("darkmode")) || false;

export const useLocalDarmode = () => {
    const [darkmode, setDarkmode] = useState(initialmode);

    useEffect(() => {
        localStorage.setItem("darkmode", JSON.stringify(darkmode));
        darkmode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, [darkmode]);

    return [darkmode, setDarkmode];
};
