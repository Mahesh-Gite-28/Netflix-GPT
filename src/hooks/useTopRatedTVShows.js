import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTVShows } from "../utils/moviesSlice";

const useTopRatedTVShows = () => {

    const dispatch = useDispatch();
    const topRatedTVShows = useSelector(store => store.movies.topRatedTVShows);

    useEffect(() => {
        !topRatedTVShows && getTopRatedTVShows();
    }, []);

    const getTopRatedTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedTVShows(json.results));
    }
};

export default useTopRatedTVShows;