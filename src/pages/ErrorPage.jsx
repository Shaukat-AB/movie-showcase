import { ErrorMsg } from '../components';
import { useTitle } from '../hooks/useTitle';

export const ErrorPage = ({
  error = null,
  resetErrorBoundary = () => null,
}) => {
  useTitle('Error');

  return (
    <ErrorMsg title="Error | Movie-Showcase" msg={error?.message}>
      <button
        onClick={resetErrorBoundary}
        className="bg-slate-500 hover:bg-slate-700 text-white text-lg py-2 px-10 rounded"
      >
        Retry
      </button>
    </ErrorMsg>
  );
};
