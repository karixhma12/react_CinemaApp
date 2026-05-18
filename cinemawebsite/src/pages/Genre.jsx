import {useParams} from "react-router-dom";

function Genre(){
    const {name} = useParams();
    return(
        <h1> Welcome to {name} movies </h1>
    )
}

export default Genre;