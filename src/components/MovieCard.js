const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 flex-shrink-0 cursor-pointer transform hover:scale-110 duration-300">
      <img className="w-full rounded-md shadow-lg" src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
