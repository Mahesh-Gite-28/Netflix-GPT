
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        flex-shrink-0 
        w-28 sm:w-36 md:w-44 lg:w-48 xl:w-52
        cursor-pointer
        transform transition duration-300
        hover:scale-[1.15] hover:z-20
      "
    >
      <img
        className="
          w-full h-full rounded-md object-cover
          shadow-lg
        "
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
