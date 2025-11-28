
export const LOGO="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const USER_AVATAR="https://pbs.twimg.com/media/GvFs5kxWEAAJpzR?format=jpg&name=360x360";

export const BACKGROUND="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES=[
  {identifier:"en", name:"english"},
  {identifier:"hindi", name:"hindi"},
  {identifier:"spanish", name:"spanish"},
  {identifier:"japanese", name:"japanese"}
]

