import s from "./style.module.css";
import {MovieListItem} from "../MovieListItem/MovieListItem.jsx";
export function MovieList({movieList, onClickItem}){
    return(
        <>
        <div className={s.title}>You may also like :</div>
        <div className={s.list}>
            {movieList.map((movie)=>{
                return (
                    <span key={movie.id} className={s.movie_list_item}>
                        <MovieListItem onClick={onClickItem} movie={movie} />
                    </span>
                );
            })}
        </div>
        </>
    )
}