import './MovieCard.scss';

const MovieCard = ({ image, title }) => {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/original/${image}`} className="card__img" alt={title} />
    </div>
  )
}

export default MovieCard;