import {useParams} from "react-router-dom";
import movies from "../data/Movies";

function Genre(){
    const {name} = useParams();
    const genreMovies = movies[name];

    return(
        <div> 
            <h1> {name} movies </h1>
            <div>
                {genreMovies.map(movie=>{
                   return <div key={movie.id}>
                        <h3> {movie.title} </h3>
                        <p> {movie.year}  • ⭐ {movie.rating} </p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Genre;