import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer } from './components';
import AppRoutes from './routes/AppRoutes';
import { ErrorPage } from './pages/ErrorPage';

const App = () => {
  return (
    <div className="dark:bg-slate-800 ">
      <Header />
      <main className="min-h-[80vh]">
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <AppRoutes />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default App;
