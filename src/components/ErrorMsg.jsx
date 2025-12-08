import { Link } from 'react-router';
import { AlertIcon } from '../lib';

export const ErrorMsg = ({ title = 'Error!', msg = '', children }) => {
  return (
    <div className="space-y-4 max-w-7xl mx-auto w-full min-h-[80vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl text-gray-900 dark:text-gray-100 mb-5">
        {title}
      </h1>
      <div className="min-w-sx w-full max-w-md flex items-center justify-center gap-3 p-6 rounded-xl ring-1 ring-orange-600/50">
        <AlertIcon className="w-12 h-12 text-orange-600" />

        <p className="text-center text-4xl text-gray-700 dark:text-gray-100">
          {msg ? msg : 'Something Went Wrong!'}
        </p>
      </div>

      {children}

      <Link
        to="/"
        className="text-gray-900 text-md rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
};
