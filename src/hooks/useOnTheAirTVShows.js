import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirTVShows } from "../utils/moviesSlice";

const useOnTheAirTVShows = () => {

    const dispatch = useDispatch();
    const onTheAirTVShows = useSelector(store => store.movies.onTheAirTVShows);

    useEffect(() => {
        !onTheAirTVShows && getOnTheAirTVShows();
    }, []);

    const getOnTheAirTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/on_the_air?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addOnTheAirTVShows(json.results));
    }
};

export default useOnTheAirTVShows;