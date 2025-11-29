import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;
    return (
        <div className="mb-6 sm:mb-8 md:mb-10 
                        px-3 sm:px-6 md:px-8 lg:px-12 
                        group">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                           font-bold text-white 
                           mb-3 sm:mb-4 md:mb-5 
                           tracking-tight 
                           hover:text-red-500 
                           transition-colors duration-300
                           drop-shadow-lg">
                {title}
            </h1>

            <div className="flex gap-2 sm:gap-3 md:gap-4 
                            overflow-x-scroll scrollbar-hide 
                            pb-3 sm:pb-4 pt-1">
                {movies.map((movie) =>{
                    return <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                })}
            </div>
        </div>
    );
};

export default MovieList;