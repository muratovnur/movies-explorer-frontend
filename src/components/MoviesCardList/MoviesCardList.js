import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'

const MoviesCardList = () => {
  let location = useLocation()
  
  return (
    <main className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="movies-card-list__more">
        {location.pathname === '/movies' 
          ? <button className="movies-card-list__more-btn button-hover-transition">Ещё</button>
          : <></>
        }
      </div>
    </main>
  )
}

export default MoviesCardList