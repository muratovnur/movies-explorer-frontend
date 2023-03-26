import React, { useState } from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

const SearchForm = (props) => {
  const [searchInput, setSearchInput] = useState(props.searchInput || '');
  const [shortsFilter, setShortsFilter] = useState(props.shorts);
  const [placeholder, setPlaceholder] = useState('Фильм')
  const [emptyInputError, setEmptyInputError] = useState(false);

  function handleInputChange(e) {
    setSearchInput(e.target.value);
    setPlaceholder('Фильм')
    setEmptyInputError(false)
  }

  function toggleShortsFilter() {
    setShortsFilter((prev) => !prev)
    props.searchMovies(searchInput, !shortsFilter);
  }

  function handleSearch() {
    if (searchInput !== '') {
      props.searchMovies(searchInput, shortsFilter);
    }
    else {
      setPlaceholder('Нужно ввести ключевое слово')
      setEmptyInputError(true)
    }
  }

  return (
    <div className="search-form">
      <input 
        type="search" 
        className={`search-form__input ${emptyInputError && 'search-form__input_error'}`}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={searchInput}
      />
      <button className="search-form__btn" onClick={handleSearch}>Поиск</button>
      <FilterCheckbox toggleShortsFilter={toggleShortsFilter} shortsFilter={shortsFilter} />
    </div>
  )
}

export default SearchForm