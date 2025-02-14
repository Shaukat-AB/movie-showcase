import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { BrowserRouter as Router } from "react-router";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </React.StrictMode>
);
