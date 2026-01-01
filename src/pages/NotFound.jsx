import { ErrorMsg, Metadata } from '../components';

export const NotFound = () => {
  return (
    <>
      <Metadata title="Page Not Found" />
      <ErrorMsg heading="404" msg="Page Not Found" />
    </>
  );
};
