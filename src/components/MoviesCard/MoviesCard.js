import React from 'react'
import './MoviesCard.css'

const MoviesCard = (props) => {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h1 className="movies-card__title">33 слова о дизайне</h1>
        <p className="movies-card__duration">1ч 47м</p>
        <div className="movies-card__bookmark-icon"></div>
      </div>
      {/* <img src='https://img.championat.com/s/735x490/news/big/m/t/chto-takoe-matrica-probuzhdenie_1639147944962706759.jpg' alt="кадр из фильма" className="movies-card__image" /> */}
      <img src={props.src} alt="кадр из фильма" className="movies-card__image" />
    </div>
  )
}

export default MoviesCard