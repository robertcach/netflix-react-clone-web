import Register from '../../views/Register/Register';
import './Header.scss';

const Header = () => {
  return(
    <div className="header wrapper">
        <h1 className="header__title">Todas las películas y series <br />que desees, y mucho más.</h1>
        <h2 className="header__subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
        <h3 className="header__text">¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.</h3>

        <div className="header__form">
          <Register />
        </div>
    </div>
  )
}

export default Header;