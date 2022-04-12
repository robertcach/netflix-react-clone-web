const ACCESS_TOKEN_KEY = "access_token";

let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || '';

export const setToken = (token) => {
  accessToken = token;
  localStorage.setItem(ACCESS_TOKEN_KEY, token) // Guarda el token en local storage
}

export const getAccessToken = () => {
  return accessToken // devuelve el token
}

export const logout = () => { // elimina el token y redirige a /login
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  window.location.assign("/login")
}