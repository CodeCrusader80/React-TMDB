import "./global.css"
import s from "./style.module.css"
import {TVShowAPI} from "./API/tv-shows.js";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config.js";

TVShowAPI.fetchPopulars()
export function App() {
    const [currentMovie, setCurrentMovie] = useState();

    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentMovie(populars[0]);
        }
    }
    useEffect(() => {
        fetchPopulars();
    }, []);

    console.log("***", currentMovie);

  return (
      <div className={s.main_container} style={{background: currentMovie ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center/ cover` : "#0A0C10"}}>
          <div className={s.header}>
              <div className="row">
                  <div className="col-4">
                      <div>Logo</div>
                      <div>Subtitle</div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                      <input style={{width:"100%"}} type="text"/>
                  </div>
              </div>
          </div>
          <div className={s.tv_show_detail}>Details</div>
          <div className={s.recommendations}>Recommended Movies</div>
      </div>
  );
}

