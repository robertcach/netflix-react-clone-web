import './Banner.scss'

const BannerLeftToRight = ({ title, subtitle, img }) => {
  return (
    <div className="banner">
      <div className="banner__wrapper wrapper">
        <div className="banner__col-left">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__subtitle">{subtitle}</p>
        </div>
        <div className="banner__col-right">
          <img className="banner__img" src={img} alt="tv-banner" />
        </div>
      </div>
    </div>
  )
}

export default BannerLeftToRight;