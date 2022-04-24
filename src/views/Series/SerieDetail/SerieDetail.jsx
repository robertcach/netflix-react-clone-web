import { useEffect, useState } from "react"
import { useParams } from "react-router";
import MovieCard from "../../../components/MovieCard/MovieCard";
import UserLoginBanner from "../../../components/UserLogginBanner/UserLoginBanner";
import { castSeriesFromMoviesApi, loadSeriesFromMoviesApi } from "../../../services/SeriesFromAPI/SeriesAPIService";
import './SerieDetail.scss';


const SerieDetail = () => {
  const [serie, setSerie] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [seasons, setSeasons] = useState([])
  const { id } = useParams();
  
  useEffect(() => {
    loadSeriesFromMoviesApi(id)
      .then(serieID => {
        setSerie(serieID)
        setGenres(serieID.genres)
        setSeasons(serieID.seasons)
      })
  }, [id])

  useEffect(() => {
    castSeriesFromMoviesApi(id)
      .then(castSerie => {
        setCast(castSerie.cast)
      })
  }, [serie, id])

  return (
    <div className="serie">

      {serie && (
        <div className="serie__banner">
          <UserLoginBanner title={serie.title} name={serie.name} overview={serie.overview} image={serie.backdrop_path} />

          <div className="serie__data">
            <h2>All seasons</h2>
            <div className="serie__seasons">
              {seasons && seasons.map(({ poster_path, name }) => {
                return  <MovieCard image={poster_path} title={name} /> 
                }
              )}
            </div>

            <div className="serie__info">
              <h2>About {serie.name}</h2>
              <div className="serie__single-info">
                <p className="serie__info-title">Cast:</p>
                  {cast && cast.map(actor => {
                    return <p className="serie__single-data">{`${actor.name},`}</p>   
                    }
                  )}
              </div>

              <div className="serie__single-info">
                <p className="serie__info-title">Genres:</p>
                {genres && genres.map(genre => {
                  return <p className="serie__single-data">{`${genre.name},`}</p>
                  }
                )}
              </div>
            </div>

          </div>
        </div>
        )}

    </div>
  )
}

export default SerieDetail;