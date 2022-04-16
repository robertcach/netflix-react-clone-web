import './UserLoginBanner.scss'

const UserLoginBanner = ({ randomMovie }) => {
  return (
    <div className="banner-login" style={{background: `linear-gradient(to top, rgb(0, 0, 0) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.9) 100%), url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}) no-repeat center center / cover`}}>
      <div className="banner-login__info">
        <h1 className="banner-login__title">{randomMovie.title || randomMovie.name}</h1>
        <p className="banner-login__description">{randomMovie.overview}</p>
      </div>
    </div>
  )
}

export default UserLoginBanner; 