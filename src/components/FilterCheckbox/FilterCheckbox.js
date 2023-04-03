import React from 'react'
import './FilterCheckbox.css'

const FilterCheckbox = (props) => {
  function handleFilterCheckboxClick(e) {
    props.toggleShortsFilter();
  }

  return (
    <div className="filter-checkbox">
      <div className={`filter-checkbox__icon ${props.shortsFilter && 'filter-checkbox__icon_active'}`} onClick={handleFilterCheckboxClick}></div>
      <span className="filter-checkbox__name">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox