import { useAuthContext } from "../../contexts/AuthContext";
import { latestTVFromAPI } from "../../services/MoviesFromAPI/MovieAPIService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";
import './Series.scss'
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const Series = () => {
  const { user } = useAuthContext();
  const [tvSeries, setTvSeries] = useState([])

  useEffect(() => {
    latestTVFromAPI()
      .then(response => setTvSeries(response))
  }, [])

  return (
    <div>
      <h1>TV Series</h1>
      <div className="tv-cards">
        <div className="tv-cards__single">
          {tvSeries && tvSeries.map(serie => {
            return (
              <Link to={`/tv/${serie.id}?api_key=${API_KEY}&language=en-US`} key={serie.id}>
                <MovieCard image={serie.poster_path} title={serie.name} onClick={() => alert('hello')} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Series;