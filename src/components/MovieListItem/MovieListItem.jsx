import s from "./style.module.css";
import {BACKDROP_BASE_URL} from "../../config.js";
export function MovieListItem({ movie, onClick }) {
    return (
        <div onClick={()=>onClick(movie)} className={s.container}>
            <img alt={movie.name} className={s.image} src={BACKDROP_BASE_URL + movie.backdrop_path} />
            <div className={s.title}>{movie.name}</div>

        </div>
    )
}