import imgBackup from "../assets/405-image.jpg";

export const MovieImage = ({ path = "", title = "", className = "" }) => {
    const image = path ? `https://image.tmdb.org/t/p/w500/${path}` : imgBackup;

    return (
        <img
            className={`rounded-t-lg ${className}`}
            src={image}
            alt={title || "405 image"}
        />
    );
};
