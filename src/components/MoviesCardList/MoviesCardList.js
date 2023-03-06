import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'
import movieImage from '../../images/movies-image.png'

const MoviesCardList = () => {
  let location = useLocation()
  
  return (
    <section className="movies-card-list">
      {location.pathname === '/movies' ? (
        <>
          <div className="movies-card-list__container">
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
          </div>
          <div className="movies-card-list__more">
            <button className="movies-card-list__more-btn button-hover-transition">Ещё</button>
          </div>
        </>
      ) : (
        <>
          <div className="movies-card-list__container">
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
            <MoviesCard src={movieImage}/>
          </div>
          <div className="movies-card-list__more"></div>
        </>
      )}
    </section>
  )
}

export default MoviesCardList