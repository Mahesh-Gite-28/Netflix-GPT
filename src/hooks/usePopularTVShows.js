import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVShows } from "../utils/moviesSlice";

const usePopularTVShows = () => {

    const dispatch = useDispatch();
    const popularTVShows = useSelector(store => store.movies.popularTVShows);

    useEffect(() => {
        !popularTVShows && getPopularTVShows();
    }, []);

    const getPopularTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularTVShows(json.results));
    }
};

export default usePopularTVShows;