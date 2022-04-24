import { useAuthContext } from "../../contexts/AuthContext";
import { latestTVFromAPI } from "../../services/MoviesFromAPI/MovieAPIService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";
import './Series.scss'

const Series = () => {
  const { user } = useAuthContext();
  const [tvSeries, setTvSeries] = useState([])

  useEffect(() => {
    latestTVFromAPI()
      .then(response => setTvSeries(response))
  }, [])


  return (
    <div className="tv-cards">
      <h1 className="tv-cards__title">Series TV</h1>
      <div className="tv-cards__single">
        {tvSeries && tvSeries.map(serie => {
          return (
            <Link to={`/tv/${serie.id}`} key={serie.id} className="tv-cards__poster">
              <MovieCard image={serie.poster_path} title={serie.name} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Series;