import { useEffect, useState } from "react"
import { useParams } from "react-router";
import UserLoginBanner from "../../../components/UserLogginBanner/UserLoginBanner";
import { loadSeriesFromMoviesApi } from "../../../services/SeriesFromAPI/SeriesAPIService";


const SerieDetail = () => {
  const [serie, setSerie] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    loadSeriesFromMoviesApi(id)
      .then(serieID => {
        setSerie(serieID)
      })
  }, [id])


  return (
    <div>
      <h1>Serie detail:</h1>
      {serie && (
        <div>
          {serie.name}
          {serie.overview}

        </div>
        )}
    </div>
  )
}

export default SerieDetail;