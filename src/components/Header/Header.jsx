import Register from '../../views/Register/Register';
import './Header.scss';

const Header = () => {
  return(
    <div className="header wrapper">
        <h1 className="header__title">Unlimited movies, TV<br />shows, and more.</h1>
        <h2 className="header__subtitle">Watch anywhere. Cancel anytime.</h2>
        <h3 className="header__text">Ready to watch? Enter your email to create or restart your membership.</h3>

        <div className="header__form">
          <Register />
        </div>
    </div>
  )
}

export default Header;