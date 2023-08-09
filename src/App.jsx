import "./global.css"
import s from "./style.module.css"
import {TVShowAPI} from "./API/tv-shows.js";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config.js";
import {MovieDetail} from "./components/MovieDetail/MovieDetail.jsx";
import {Logo} from "./components/Logo/Logo.jsx";
import logo from "./assets/images/captain-1296107.svg";
import {MovieList} from "./components/MovieList/MovieList.jsx";
import {SearchBar} from "./components/SearchBar/SearchBar.jsx";


export function App() {
    const [currentMovie, setCurrentMovie] = useState();
    const [recommendationList, setRecommendationList] = useState([])

    async function fetchPopulars() {
        try {
            const populars = await TVShowAPI.fetchPopulars();
            if (populars.length > 0) {
                setCurrentMovie(populars[1]);
            }
        } catch (error){
            console.error("Une erreur est survenu :", error);
        }
    }
    async function fetchRecommendations(movieID) {
    try {
        const recommendations = await TVShowAPI.fetchRecommendations(movieID);
        if (Array.isArray(recommendations) && recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10));
        }
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des recommandations:", error);
    }
}
    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if(currentMovie){
            fetchRecommendations(currentMovie.id);
        }
    }, [currentMovie]);

    async function searchMovie (movieName){
        const searchResponse = await TVShowAPI.fetchByTitle(movieName)
        if (searchResponse.length > 0) {
            setCurrentMovie(searchResponse[0]);
        }
    }
console.log(recommendationList);
  return (
      <div className={s.main_container} style={{background: currentMovie ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center/ cover` : "#0A0C10"}}>
          <div className={s.header}>
              <div className="row">
                  <div className="col-4">
                      <Logo image={logo} title="TVPulse" subtitle="Find your next favorite show"/>
                  </div>
                  <div className="col-sm-12 col-md-4">
                      <SearchBar onSubmit={searchMovie}/>
                  </div>
              </div>
          </div>
          <div className={s.tv_show_detail}>{currentMovie && <MovieDetail movie={currentMovie}/>}</div>
          <div className={s.recommendations}>
              {recommendationList && recommendationList.length > 0 && (<MovieList onClickItem={setCurrentMovie} movieList={recommendationList}/>
              )}
          </div>
      </div>
  );
}

