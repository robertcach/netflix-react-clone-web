import axios from 'axios';
import { getAccessToken, logout } from '../store/AccessTokenStore'

const createHttp = (useAccessToken = false) => {
  const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST_PRODUCTION}`,
  })

  http.interceptors.request.use((request) => {
    if (useAccessToken && getAccessToken()) { // getAccessToken() devuelve el token
      request.headers.common.Authorization = `Bearer ${getAccessToken()}` // Añadir token en la cabecera Authorization
    }
    return request
  })

  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error?.response?.status && [401, 403].includes(error.response.status)) {
        if (getAccessToken()) {
          // delete token
          logout()

          if (window.location.pathname !== '/login') {
            window.location.assign('/login')
          }
        }
      }
      return Promise.reject(error);
    }
  )

  return http
}


export default createHttp;