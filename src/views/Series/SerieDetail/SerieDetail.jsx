import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { serieDetailFromAPI } from "../../../services/MoviesFromAPI/MovieAPIService";


const SerieDetail = () => {
  const [serie, setSerie] = useState({});
  const { id } = useParams();

  console.log(id)
  
  useEffect(() => {
    serieDetailFromAPI(id)
      .then(serie => console.log(serie))
  })


  return (
    <div>
      {serie && console.log(serie.status_message)}
    </div>
  )
}

export default SerieDetail