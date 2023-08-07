import s from "./style.module.css"
import {FiveStarRating} from "../FiveStarRating/FiveStarRating.jsx";
export function MovieDetail({movie}) {

    const rating = movie.vote_average/2;
    return(
        <div>
            <div className={s.title}>{movie.title}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating}/>
                <div className={s.rating}>{rating}</div>
            </div>
            <div className={s.overview}>{movie.overview}</div>
        </div>
    )
}