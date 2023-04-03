import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'


const SavedMovies = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchCompleted, setSearchCompleted] = useState(false);

  useEffect(() => {
    props.getSavedMovies();
  }, [])

  function searchMovies(searchInput, shorts) {
    
    const result = shorts ? props.savedMovies.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')) && m.duration <= 40)
    : props.savedMovies.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')))

    setSearchResult(result);
    setSearchCompleted(true);
  }
  
  return (
    <>
      <SearchForm searchMovies={searchMovies}  />
      {searchCompleted && searchResult
        ? <MoviesCardList savedMovies={searchResult} onDeleteMovie={props.onDeleteMovie} searchCompleted={searchCompleted}/>  
        : <MoviesCardList savedMovies={props.savedMovies} onDeleteMovie={props.onDeleteMovie} searchCompleted={searchCompleted}/>  
      }
    </>
  )
}

export default SavedMovies