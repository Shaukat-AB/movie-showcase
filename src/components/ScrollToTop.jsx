import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // scroll to top whenever path changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
export default ScrollToTop;
