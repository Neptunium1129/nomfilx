import axios from "axios";

//악시오스
const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key : "7001d45c17dbc4425cae8c7870571479",
        language : "ko"
    }
});

//api.get("tv/popular");

/*
export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
  };
  
  export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today")
  };
*/



export const tvApi = {
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    showDetail : (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get("search/tv", {
        params : {
            query : (term)
        }
    })
}

export const moviesApi = {
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming :  () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : (id) => api.get(`movie/${id}`,{
        params : {
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get("search/movie", {
        params : {
            query : (term)
        }
    })
}