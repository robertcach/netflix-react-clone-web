import { createContext, useState, useContext, useEffect } from "react";
import { setToken, getAccessToken, logout } from "../store/AccessTokenStore";
import { getCurrentUser } from "../services/UsersService";
import { verifyJWT } from "../utils/jwtHelper";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticationFetched, setIsAuthenticationFetched] = useState(false)

  const login = (token, navigateCb) => {
    setToken(token) // llamada al método setToken pasándole el token

    getUser(navigateCb) // Ejecuta getUser pasándole el callback (archivo login.jsx)
  }

  const getUser = (cb) => {
    getCurrentUser() 
      .then(userFromApi => {
        setUser(userFromApi) // almacena el usuario que ha hecho login
        setIsAuthenticationFetched(true)

        cb && cb() // Si hay callback, lo ejecuta
      })
  }


  useEffect(() => {
    // Si existe token, me traigo al usuario
    if (getAccessToken()) {
      if (!verifyJWT(getAccessToken())) {
        // Si no puede comprobar el token, echo al usuario de la app
        logout()
      } else {
        getUser()
      }
    } else {
      setIsAuthenticationFetched(true)
    }
  }, [])

  const value = {
    user,
    isAuthenticationFetched,
    login,
    getUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext;