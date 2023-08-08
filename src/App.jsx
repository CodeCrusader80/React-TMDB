import "./global.css"
import s from "./style.module.css"
import {TVShowAPI} from "./API/tv-shows.js";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config.js";
import {MovieDetail} from "./components/MovieDetail/MovieDetail.jsx";
import {Logo} from "./components/Logo/Logo.jsx";
import logo from "./assets/images/captain-1296107.svg";
import {MovieList} from "./components/MovieList/MovieList.jsx";


export function App() {
    const [currentMovie, setCurrentMovie] = useState();
    const [recommendationList, setRecommendationList] = useState([])

    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentMovie(populars[0]);
        }
    }
    async function fetchRecommdentions(movieID) {
        const recommendations = await TVShowAPI.fetchRecommendations(movieID);
        if (recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10));
        }
    }
    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if(currentMovie){
            fetchRecommdentions(currentMovie.id);
        }
    }, [currentMovie]);


  return (
      <div className={s.main_container} style={{background: currentMovie ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center/ cover` : "#0A0C10"}}>
          <div className={s.header}>
              <div className="row">
                  <div className="col-4">
                      <Logo image={logo} title="MoviePulse" subtitle="Find your next favorite movie"/>
                  </div>
                  <div className="col-sm-12 col-md-4">
                      <input style={{width:"100%"}} type="text"/>
                  </div>
              </div>
          </div>
          <div className={s.tv_show_detail}>{currentMovie && <MovieDetail movie={currentMovie}/>}</div>
          <div className={s.recommendations}>{recommendationList && recommendationList.length > 0 && <MovieList onClickItem={setCurrentMovie} movieList={recommendationList}/>}</div>
      </div>
  );
}

