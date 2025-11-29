import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    
    return (
        <div className="
            w-28 xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-52 
            flex-shrink-0 cursor-pointer rounded-md sm:rounded-lg overflow-hidden 
            transition-all duration-500 ease-out 
            hover:scale-105 sm:hover:scale-110 hover:z-20 
            shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-white/20
            group relative
            ring-1 sm:ring-2 ring-transparent hover:ring-white/30
        ">
            <img
                className="w-full aspect-[2/3] object-cover 
                           transition-all duration-500
                           group-hover:brightness-110 group-hover:contrast-110"
                src={ posterPath ? IMG_CDN_URL + posterPath : "./assets/No_Image.webp"}
                alt="movie"
            />
            <div className="
                absolute inset-0 
                bg-gradient-to-t from-black/80 via-transparent to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
            "></div>
        </div>
    );
};

export default MovieCard;