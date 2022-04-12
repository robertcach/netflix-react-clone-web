import createHttp from './BaseService';

const http = createHttp(false)

export const loginRequest = (data) => http.post("/login", data) // la ruta debe coincidir con la ruta del back
export const registerRequest = (data) => http.post("/users", data)