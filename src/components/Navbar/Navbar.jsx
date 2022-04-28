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
        {!user ? (
          <Link to="/">
            <img src={logo} className="nav__logo" alt="netflix-logo" />
          </Link>
        ):(
          <Link to="/profile">
            <img src={logo} className="nav__logo" alt="netflix-logo" />
          </Link>
        )}
        
        
      </div>
      <div className="nav__col-right">
        <ul className="nav__ul">
         {!user ? (
           <>
              <Link to="/login" className="nav__login">Sign In</Link>
           </>
          ) : (
            <div className="nav__menu">
              <div className="nav__login-left">
                <Link to="/movie/new" className="nav__text">Create Movie</Link>
                <Link to="/series" className="nav__text">Series TV</Link>
                <Link to="/my-movies" className="nav__text">My movies</Link>
              </div>

              <div className="nav__login-right">     
                <button onClick={logout} className="nav__logout">Logout</button>
              </div>
              
            </div>
          )
         }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;