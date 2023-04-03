import { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


const Movies = (props) => {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('searchResult')) || []);
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchInput') || '');
  const [shorts, setShorts] = useState(localStorage.getItem('shorts') === 'true');


  async function searchMovies(searchInput, shorts) {
    setPreloaderActive(true);
    let allMovies = props.allMovies;

    if (!allMovies.length) {
      allMovies = await props.getAllMovies()

      if (!allMovies.length) {
        setErrorOccured(true);
      }
    }
    const searchResult = shorts ? allMovies.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')) && m.duration <= 40)
    : allMovies.filter((m) => m.nameRU.match(new RegExp(searchInput, 'i')))
    
    setMovies(searchResult);
    setPreloaderActive(false);
    setSearchCompleted(true);

    localStorage.setItem('shorts', shorts);
    localStorage.setItem('searchInput', searchInput);
    localStorage.setItem('searchResult', JSON.stringify(searchResult));
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
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