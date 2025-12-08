import { ErrorMsg } from '../components';
import { useTitle } from '../hooks/useTitle';

export const NotFound = () => {
  useTitle('Page Not Found');

  return <ErrorMsg title="404" msg="Page Not Found" />;
};
