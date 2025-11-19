import noImage from '/images/405-image.jpg';

export const MovieImage = ({ path = '', title = '', className = '' }) => {
  const image = path ? `https://image.tmdb.org/t/p/w500/${path}` : noImage;

  return (
    <img
      width="500"
      className={`w-md lg:w-[500px] font- h-auto rounded-t-lg ${className}`}
      src={image}
      alt={title || '405 image'}
    />
  );
};
