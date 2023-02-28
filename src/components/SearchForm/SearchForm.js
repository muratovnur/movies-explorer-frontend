import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

const SearchForm = () => {
  return (
    <div className="search-form">
      <input type="search" className="search-form__input" placeholder="Фильм" />
      <button className="search-form__btn">Поиск</button>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm