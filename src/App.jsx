import { Header, Footer } from "./components";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <div className="dark:bg-slate-800 ">
            <Header />
            <main className="min-h-screen">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
};

export default App;
