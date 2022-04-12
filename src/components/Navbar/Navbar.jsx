import { Link } from 'react-router-dom';
import logo from "../../assets/images/netflix-logo.svg"
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="nav">
      <div className="nav__col-left">
        <Link to="/">
          <img src={logo} className="nav__logo" alt="netflix-logo" />
        </Link>
        
      </div>
      <div className="nav__col-right">
        <ul className="nav__ul">
         {!user ? (
           <>
              <Link to="/login" className="nav__login">Iniciar sesión</Link>
           </>
          ) : (
            <>
              <Link to="/profile" className="nav__login">Perfil</Link>
              <Link to="/favourites" className="nav__login">Favoritos</Link>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          )
         }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;