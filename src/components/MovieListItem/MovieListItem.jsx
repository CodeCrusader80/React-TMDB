import s from "./style.module.css";
import {SMALL_IMG_COVER_BASE_URL} from "../../config.js";
export function MovieListItem({movie, onClick}) {
    return (
        <div onClick={()=>onClick(movie)} className={s.container}>
            <img alt={movie.title} className={s.image} src={SMALL_IMG_COVER_BASE_URL + movie.backdrop_path} />
            <div className={s.title}>{movie.title}</div>

        </div>
    )
}