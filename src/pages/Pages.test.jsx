import { render } from '@testing-library/react';
import { ShowMovies, SearchResult, MovieDetail, NotFound } from '.';
import { ErrorPage } from './ErrorPage';
import { describe, test } from 'vitest';
import { MemoryRouter } from 'react-router';

const App = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

describe('Pages', () => {
  test('should render ShowMovies page', () => {
    render(<ShowMovies />);
  });

  test('should render SearchResult page', () => {
    render(
      <App>
        <SearchResult />
      </App>
    );
  });

  test('should render MovieDetail page', () => {
    render(<MovieDetail />);
  });

  test('should render Notfound page', () => {
    render(
      <App>
        <NotFound />
      </App>
    );
  });

  test('should render ErrorPage', () => {
    render(
      <App>
        <ErrorPage />
      </App>
    );
  });
});
