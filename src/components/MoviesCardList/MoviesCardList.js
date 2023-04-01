import React, { useEffect, useState } from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'


const MoviesCardList = (props) => {
  let location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialSize, setInitialSize] = useState();
  const [rowSize, setRowSize] = useState();
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   setMovies(props.movies)
  })
  
  useEffect(() => {
    if (movies && movies.length > initialSize) {
      setShowMoreButton(true);
    }
    else {
      setShowMoreButton(false);
    }
  }, [initialSize, movies])

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 200);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      if(windowWidth > 768) {
        setInitialSize(12);
        setRowSize(3);
      }
      else if (windowWidth > 480) {
        setInitialSize(8);
        setRowSize(2);
      }
      else {
        setInitialSize(5);
        setRowSize(5);
      }
  },[windowWidth])

  function renderMoreMovies() {
    setInitialSize(prev => prev + rowSize)
  }
  
  return (
    <section className="movies-card-list">
      {location.pathname === '/movies' ? (
        <>
          {props.searchCompleted && props.movies.length === 0 && !props.errorOccured && <span className="movies-card-list__error">Ничего не найдено</span>}
          {props.searchCompleted && props.errorOccured && <span className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
          <div className="movies-card-list__container">
            {props.movies && props.movies.slice(0, initialSize).map((movie) => {
              // Если карточка есть в сохранённых передать данные сохранённой карточки
              let savedMovie;
              
              if (props.savedMovies) {
                savedMovie = props.savedMovies.find(m => m.movieId === movie.id);
              }
              
              return <MoviesCard 
                movie={movie} 
                savedMovie={savedMovie}
                savedMovies={props.savedMovies}
                key={movie.id} 
                onSaveMovie={props.onSaveMovie}
                onDeleteMovie={props.onDeleteMovie}
              />
            })}
          </div>
          <div className="movies-card-list__more">
            {showMoreButton && <button className="movies-card-list__more-btn button-hover-transition" onClick={renderMoreMovies}>Ещё</button>}
          </div>
        </>
      ) : (
        <>
          {props.searchCompleted && props.savedMovies.length === 0 && <span className="movies-card-list__error">Ничего не найдено</span>}
          <div className="movies-card-list__container">
            {props.savedMovies && props.savedMovies.map((movie) => <MoviesCard movie={movie} key={movie.movieId} onDeleteMovie={props.onDeleteMovie} savedMovies={props.savedMovies} />)}
          </div>
          <div className="movies-card-list__more"></div>
        </>
      )}
    </section>
  )
}

export default MoviesCardList