import React, { useContext } from 'react'
import './MoviesCard.css'
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


const MoviesCard = (props) => {
  let location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  function handleBookmarkClick(e) {
    if (!props.savedMovie) {
      props.onSaveMovie(props.movie);
    }
    else {
      props.onDeleteMovie(props.savedMovie._id)
    }
  }

  function handleDeleteClick(e) {
    props.onDeleteMovie(props.movie._id)
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h1 className="movies-card__title">{props.movie.nameRU}</h1>
        <p className="movies-card__duration">{`${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`}</p>
        {location.pathname === '/movies' 
          ? <div className={`movies-card__bookmark-icon ${props.savedMovie && props.savedMovie.owner === currentUser._id && 'movies-card__bookmark-icon_active'}`} onClick={handleBookmarkClick}></div>
          : <div className="movies-card__delete-icon" onClick={handleDeleteClick}></div>
        }
      </div>
      <Link to={props.movie.trailerLink} className="movie-card__wrapper" target='_blank'>
        {location.pathname === '/movies' 
          ? <img src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt={`кадр из фильма ${props.movie.nameRU}`} className="movies-card__image" />
          : <img src={props.movie.image} alt={`кадр из фильма ${props.movie.nameRU}`} className="movies-card__image" />
        }
      </Link>
    </div>
  )
}

export default MoviesCard