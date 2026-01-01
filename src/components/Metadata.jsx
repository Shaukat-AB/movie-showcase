export const Metadata = ({ title = '' }) => {
  const pageTitle = title ? `${title} | Movie Showcase` : 'Movie Showcase';

  return <title>{pageTitle}</title>;
};
