import { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi'

const Movies = (props) => {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('searchResult')) || []);
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchInput') || '');
  const [shorts, setShorts] = useState(localStorage.getItem('shorts') === 'true');


  function searchMovies(searchInput, shorts) {
    setPreloaderActive(true);
    
    moviesApi().then(res => {
      let searchResult;
      
      searchResult = shorts ? res.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')) && m.duration <= 40)
      : res.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')))
      
      setMovies(searchResult);
      setPreloaderActive(false);
      setSearchCompleted(true);

      localStorage.setItem('shorts', shorts);
      localStorage.setItem('searchInput', searchInput);
      localStorage.setItem('searchResult', JSON.stringify(searchResult));
    })
    .catch((err) => {
      console.log(err);
      setErrorOccured(true);
    })
  }

  return (
    <>
      <SearchForm searchMovies={searchMovies} searchInput={searchInput} shorts={shorts}/>
      {preloaderActive 
        ? <Preloader /> 
        : <MoviesCardList 
            searchCompleted={searchCompleted} 
            errorOccured={errorOccured} 
            movies={movies}
            savedMovies={props.savedMovies}
            onSaveMovie={props.onSaveMovie}
            onDeleteMovie={props.onDeleteMovie}
          />  
      }
    </>
  )
}

export default Movies