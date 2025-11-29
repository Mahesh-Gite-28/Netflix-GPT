export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158";

export const USER_AVATAR = "https://imgs.search.brave.com/p8RQayDkvWb9n1uSCrbZGueE2L5-6pcWSykm32Erg5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxLzg2/LzFiLzkxODYxYjc0/OTg0MTIyMWQ1MjEy/MmYwYzI5MzNkOGE2/LmpwZw";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/IN-en-20251110-TRIFECTA-perspective_281b0878-5972-49a4-9956-3f0cb5eb039b_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hi", name: "Hindi"},
    {identifier: "es", name: "Spanish"}
]

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;