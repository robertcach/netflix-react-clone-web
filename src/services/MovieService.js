import createHttp from "./BaseService";

const http = createHttp(true)

export const createMovie = (data) => http.post("/movie/new", data);
export const getMovie = (id) => http.get(`/movie/${id}`);
export const updateMovie = (id, data) => http.patch(`/movie/${id}`, data);
export const deleteMovie = (id) => http.delete(`/movie/${id}`);