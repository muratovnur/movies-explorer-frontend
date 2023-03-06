import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  )
}

export default SavedMovies