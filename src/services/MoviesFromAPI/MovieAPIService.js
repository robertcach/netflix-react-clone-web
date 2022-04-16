import loadMoviesFromApi from "./BaseMovieAPIService";
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export const trendingMoviesFromAPI = () => loadMoviesFromApi.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`);
export const netflixOriginalsMoviesFromAPI = () => loadMoviesFromApi.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`);
export const topRatedMoviesFromAPI = () => loadMoviesFromApi.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`);
export const actionMoviesFromAPI = () => loadMoviesFromApi.get(`/discover/movie?api_key=${API_KEY}&with_genres=28`);
export const movieDetailFromAPI = (id) => loadMoviesFromApi.get(`/movie/${id}?api_key=${API_KEY}&with_genres=28`);

export const latestTVFromAPI = () => loadMoviesFromApi.get(`/discover/tv?api_key=${API_KEY}&language=en-US`);
export const serieDetailFromAPI = (id) => loadMoviesFromApi.get(`/tv/${id}?api_key=${API_KEY}&language=en-US`);
